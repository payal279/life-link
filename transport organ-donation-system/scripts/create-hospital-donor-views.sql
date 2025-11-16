-- Create views to show donor-hospital relationships

-- View showing all donors with their hospital information
CREATE VIEW donor_hospital_view AS
SELECT 
    d.id as donor_id,
    d.first_name,
    d.last_name,
    d.blood_type,
    d.city,
    d.state,
    d.phone,
    d.status as donor_status,
    d.medical_clearance_status,
    d.assigned_doctor,
    d.registration_date,
    h.hospital_name,
    h.phone as hospital_phone,
    h.email as hospital_email,
    h.hospital_type,
    h.emergency_contact as hospital_emergency_contact,
    STRING_AGG(do.organ_type, ', ') as available_organs
FROM organ_donors d
JOIN hospitals h ON d.hospital_id = h.id
LEFT JOIN donor_organs do ON d.id = do.donor_id AND do.availability_status = 'available'
GROUP BY d.id, h.id;

-- View for emergency search with hospital coordination
CREATE VIEW emergency_donor_search AS
SELECT 
    d.id as donor_id,
    d.first_name || ' ' || SUBSTRING(d.last_name, 1, 1) || '.' as donor_name,
    d.blood_type,
    d.city || ', ' || d.state as location,
    d.phone as emergency_contact,
    d.medical_clearance_status,
    h.hospital_name,
    h.phone as hospital_contact,
    h.emergency_contact as hospital_emergency,
    d.assigned_doctor,
    do.organ_type,
    do.availability_status,
    d.updated_at as last_updated
FROM organ_donors d
JOIN hospitals h ON d.hospital_id = h.id
JOIN donor_organs do ON d.id = do.donor_id
WHERE d.status = 'active' 
AND h.status = 'approved'
AND do.availability_status = 'available';

-- View for hospital dashboard showing their registered donors
CREATE VIEW hospital_donor_dashboard AS
SELECT 
    h.hospital_name,
    h.id as hospital_id,
    COUNT(d.id) as total_donors,
    COUNT(CASE WHEN d.medical_clearance_status = 'approved' THEN 1 END) as approved_donors,
    COUNT(CASE WHEN d.medical_clearance_status = 'pending' THEN 1 END) as pending_donors,
    COUNT(CASE WHEN d.status = 'active' THEN 1 END) as active_donors,
    COUNT(do.id) as total_organs_available
FROM hospitals h
LEFT JOIN organ_donors d ON h.id = d.hospital_id
LEFT JOIN donor_organs do ON d.id = do.donor_id AND do.availability_status = 'available'
GROUP BY h.id, h.hospital_name;
