-- Enhanced database schema with time tracking for organ viability

-- Add new columns to existing organ_donors table
ALTER TABLE organ_donors ADD COLUMN IF NOT EXISTS donor_type VARCHAR(20) DEFAULT 'living';
ALTER TABLE organ_donors ADD COLUMN IF NOT EXISTS time_of_death TIMESTAMP;
ALTER TABLE organ_donors ADD COLUMN IF NOT EXISTS procurement_time TIMESTAMP;

-- Enhanced donor_organs table with time tracking
DROP TABLE IF EXISTS donor_organs CASCADE;
CREATE TABLE donor_organs (
    id SERIAL PRIMARY KEY,
    donor_id INTEGER REFERENCES organ_donors(id) ON DELETE CASCADE,
    organ_type VARCHAR(50) NOT NULL,
    availability_status VARCHAR(20) DEFAULT 'available',
    viability_hours INTEGER NOT NULL DEFAULT 24,
    procurement_time TIMESTAMP,
    expiry_time TIMESTAMP,
    is_critical BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create function to automatically calculate expiry time
CREATE OR REPLACE FUNCTION calculate_expiry_time()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.procurement_time IS NOT NULL THEN
        NEW.expiry_time = NEW.procurement_time + (NEW.viability_hours || ' hours')::INTERVAL;
    END IF;
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update expiry time
DROP TRIGGER IF EXISTS update_expiry_time ON donor_organs;
CREATE TRIGGER update_expiry_time
    BEFORE INSERT OR UPDATE ON donor_organs
    FOR EACH ROW
    EXECUTE FUNCTION calculate_expiry_time();

-- Create function to automatically remove expired organs
CREATE OR REPLACE FUNCTION remove_expired_organs()
RETURNS INTEGER AS $$
DECLARE
    expired_count INTEGER;
BEGIN
    -- Update status of expired organs
    UPDATE donor_organs 
    SET availability_status = 'expired'
    WHERE expiry_time < CURRENT_TIMESTAMP 
    AND availability_status = 'available';
    
    GET DIAGNOSTICS expired_count = ROW_COUNT;
    
    -- Log the cleanup
    INSERT INTO search_logs (organ_type, blood_type, location, urgency_level, results_count, search_timestamp)
    VALUES ('CLEANUP', 'N/A', 'SYSTEM', 'expired_removal', expired_count, CURRENT_TIMESTAMP);
    
    RETURN expired_count;
END;
$$ LANGUAGE plpgsql;

-- Create table for organ viability limits
CREATE TABLE IF NOT EXISTS organ_viability_limits (
    id SERIAL PRIMARY KEY,
    organ_type VARCHAR(50) UNIQUE NOT NULL,
    min_hours INTEGER NOT NULL,
    max_hours INTEGER NOT NULL,
    default_hours INTEGER NOT NULL,
    is_critical BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert organ viability data
INSERT INTO organ_viability_limits (organ_type, min_hours, max_hours, default_hours, is_critical) VALUES
('Heart', 4, 6, 4, TRUE),
('Lungs', 4, 8, 6, TRUE),
('Liver', 8, 12, 10, FALSE),
('Kidneys', 24, 48, 36, FALSE),
('Pancreas', 12, 24, 18, FALSE),
('Small Intestine', 6, 12, 8, FALSE),
('Corneas', 72, 168, 120, FALSE)
ON CONFLICT (organ_type) DO UPDATE SET
    min_hours = EXCLUDED.min_hours,
    max_hours = EXCLUDED.max_hours,
    default_hours = EXCLUDED.default_hours,
    is_critical = EXCLUDED.is_critical;

-- Create view for active donors with time tracking
CREATE OR REPLACE VIEW active_donors_with_time AS
SELECT 
    od.id,
    od.first_name,
    od.last_name,
    od.blood_type,
    od.city,
    od.state,
    od.donor_type,
    od.status,
    od.medical_clearance_status,
    od.hospital_id,
    h.hospital_name,
    h.phone as hospital_phone,
    od.assigned_doctor,
    ARRAY_AGG(
        JSON_BUILD_OBJECT(
            'organ_type', dorg.organ_type,
            'viability_hours', dorg.viability_hours,
            'procurement_time', dorg.procurement_time,
            'expiry_time', dorg.expiry_time,
            'is_critical', dorg.is_critical,
            'time_remaining_minutes', 
            CASE 
                WHEN dorg.expiry_time IS NOT NULL 
                THEN EXTRACT(EPOCH FROM (dorg.expiry_time - CURRENT_TIMESTAMP))/60
                ELSE NULL 
            END
        )
    ) as organs_with_timing
FROM organ_donors od
JOIN hospitals h ON od.hospital_id = h.id
LEFT JOIN donor_organs dorg ON od.id = dorg.donor_id 
WHERE od.status = 'active' 
AND (dorg.availability_status = 'available' OR dorg.availability_status IS NULL)
AND (dorg.expiry_time IS NULL OR dorg.expiry_time > CURRENT_TIMESTAMP)
GROUP BY od.id, h.hospital_name, h.phone;

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_donor_organs_expiry ON donor_organs(expiry_time);
CREATE INDEX IF NOT EXISTS idx_donor_organs_status ON donor_organs(availability_status);
CREATE INDEX IF NOT EXISTS idx_donor_organs_critical ON donor_organs(is_critical);
CREATE INDEX IF NOT EXISTS idx_organ_donors_type ON organ_donors(donor_type);

-- Create scheduled job function (to be called by cron or application)
CREATE OR REPLACE FUNCTION cleanup_expired_organs_job()
RETURNS TEXT AS $$
DECLARE
    cleanup_count INTEGER;
    result_text TEXT;
BEGIN
    SELECT remove_expired_organs() INTO cleanup_count;
    
    result_text := 'Cleanup completed at ' || CURRENT_TIMESTAMP || 
                   '. Removed ' || cleanup_count || ' expired organs.';
    
    -- Log the result
    RAISE NOTICE '%', result_text;
    
    RETURN result_text;
END;
$$ LANGUAGE plpgsql;
