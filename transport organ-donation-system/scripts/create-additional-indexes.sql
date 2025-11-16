-- Additional indexes for better performance with expanded data

-- Indexes for better search performance
CREATE INDEX idx_donors_age ON organ_donors(EXTRACT(YEAR FROM AGE(date_of_birth)));
CREATE INDEX idx_donors_status ON organ_donors(status);
CREATE INDEX idx_donors_full_name ON organ_donors(first_name, last_name);

-- Composite indexes for common search patterns
CREATE INDEX idx_donors_blood_location ON organ_donors(blood_type, city, state);
CREATE INDEX idx_donor_organs_composite ON donor_organs(organ_type, availability_status, donor_id);

-- Indexes for organizations and hospitals
CREATE INDEX idx_organizations_type ON organizations(organization_type);
CREATE INDEX idx_organizations_status ON organizations(status);
CREATE INDEX idx_hospitals_type ON hospitals(hospital_type);
CREATE INDEX idx_hospitals_status ON hospitals(status);

-- Full-text search indexes for better name searching
CREATE INDEX idx_donors_name_search ON organ_donors USING gin(to_tsvector('english', first_name || ' ' || last_name));
CREATE INDEX idx_hospitals_name_search ON hospitals USING gin(to_tsvector('english', hospital_name));
CREATE INDEX idx_organizations_name_search ON organizations USING gin(to_tsvector('english', organization_name));
