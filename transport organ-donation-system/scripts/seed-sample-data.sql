-- Insert sample data for testing

-- Sample hospitals
INSERT INTO hospitals (
    hospital_name, registration_number, address, city, state, zip_code,
    phone, email, contact_person_name, contact_person_title,
    contact_person_phone, contact_person_email, hospital_type,
    bed_capacity, emergency_contact, license_number, status
) VALUES 
(
    'Metropolitan General Hospital', 'MGH-2024-001',
    '123 Medical Center Drive', 'New York', 'NY', '10001',
    '+1-212-555-0100', 'admin@metrogh.org', 'Dr. Sarah Johnson', 'Chief Medical Officer',
    '+1-212-555-0101', 'sarah.johnson@metrogh.org', 'general',
    500, '+1-212-555-0199', 'NY-MED-12345', 'approved'
),
(
    'St. Mary\'s Transplant Center', 'SMTC-2024-002',
    '456 Healthcare Boulevard', 'Los Angeles', 'CA', '90210',
    '+1-323-555-0200', 'info@stmarystc.org', 'Dr. Michael Chen', 'Transplant Director',
    '+1-323-555-0201', 'michael.chen@stmarystc.org', 'transplant',
    300, '+1-323-555-0299', 'CA-TRANS-67890', 'approved'
);

-- Sample organ donors
INSERT INTO organ_donors (
    first_name, last_name, date_of_birth, gender, blood_type,
    address, city, state, zip_code, phone, email,
    emergency_contact_name, emergency_contact_phone, emergency_contact_relation
) VALUES 
(
    'John', 'Doe', '1995-03-15', 'male', 'O+',
    '789 Donor Street', 'New York', 'NY', '10002',
    '+1-212-555-0301', 'john.doe@email.com',
    'Jane Doe', '+1-212-555-0302', 'Spouse'
),
(
    'Sarah', 'Miller', '1989-07-22', 'female', 'A+',
    '321 Life Avenue', 'Brooklyn', 'NY', '11201',
    '+1-718-555-0401', 'sarah.miller@email.com',
    'Robert Miller', '+1-718-555-0402', 'Husband'
),
(
    'Michael', 'Rodriguez', '1987-11-08', 'male', 'B+',
    '654 Hope Lane', 'Queens', 'NY', '11101',
    '+1-718-555-0501', 'michael.rodriguez@email.com',
    'Maria Rodriguez', '+1-718-555-0502', 'Wife'
);

-- Sample organizations
INSERT INTO organizations (
    organization_name, organization_type, registration_number,
    address, city, state, zip_code, phone, email,
    director_name, director_email, director_phone,
    contact_person_name, contact_person_title, contact_person_phone, contact_person_email,
    services_provided, years_in_operation, mission_statement, status
) VALUES 
(
    'National Organ Donation Network', 'nonprofit', 'NODN-2024-001',
    '100 Donation Plaza', 'Washington', 'DC', '20001',
    '+1-202-555-0600', 'info@nodn.org',
    'Dr. Patricia Williams', 'patricia.williams@nodn.org', '+1-202-555-0601',
    'James Thompson', 'Operations Manager', '+1-202-555-0602', 'james.thompson@nodn.org',
    'Organ donation coordination, donor registration, hospital liaison services',
    15, 'To save lives through organ donation by connecting donors with recipients nationwide.',
    'approved'
);

-- Sample donor organs
INSERT INTO donor_organs (donor_id, organ_type) VALUES 
(1, 'Heart'),
(1, 'Liver'),
(1, 'Kidneys'),
(2, 'Kidneys'),
(2, 'Corneas'),
(3, 'Liver'),
(3, 'Pancreas');
