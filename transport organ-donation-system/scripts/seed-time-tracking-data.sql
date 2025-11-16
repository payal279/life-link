-- Seed data with time tracking for organ viability

-- Clear existing data
DELETE FROM donor_organs;
DELETE FROM organ_donors WHERE id > 0;

-- Insert donors with time tracking
INSERT INTO organ_donors (
    id, first_name, last_name, date_of_birth, gender, blood_type,
    address, city, state, zip_code, phone, email,
    emergency_contact_name, emergency_contact_phone, emergency_contact_relation,
    hospital_id, medical_clearance_status, assigned_doctor, status, donor_type,
    time_of_death, procurement_time
) VALUES 
-- Critical deceased donor with recent procurement
(1, 'John', 'D.', '1995-03-15', 'male', 'O+',
 '123 Main Street', 'New York', 'NY', '10001',
 '+1-555-0123', 'john.d@email.com',
 'Jane D.', 'O+',
 '123 Main Street', 'New York', 'NY', '10001',
 '+1-555-0123', 'john.d@email.com',
 'Jane D.', '+1-555-0124', 'Wife',
 1, 'approved', 'Dr. Sarah Johnson', 'active', 'deceased',
 CURRENT_TIMESTAMP - INTERVAL '2 hours', CURRENT_TIMESTAMP - INTERVAL '2 hours'),

-- Critical deceased donor - very recent
(2, 'Priya', 'Sharma', '1994-05-12', 'female', 'AB+',
 'A-204, Shanti Apartments, Bandra West', 'Mumbai', 'Maharashtra', '400050',
 '+91-98765-43210', 'priya.sharma@email.com',
 'Rohit Sharma', '+91-98765-43211', 'Husband',
 6, 'approved', 'Dr. Santosh Shetty', 'active', 'deceased',
 CURRENT_TIMESTAMP - INTERVAL '1 hour', CURRENT_TIMESTAMP - INTERVAL '1 hour'),

-- Deceased donor with longer viability organs
(3, 'Rajesh', 'Kumar', '1988-09-18', 'male', 'O-',
 '45, Rajouri Garden, Near Metro Station', 'New Delhi', 'Delhi', '110027',
 '+91-98123-45678', 'rajesh.kumar@email.com',
 'Sunita Kumar', '+91-98123-45679', 'Wife',
 1, 'approved', 'Dr. Rajesh Kumar Sharma', 'active', 'deceased',
 CURRENT_TIMESTAMP - INTERVAL '8 hours', CURRENT_TIMESTAMP - INTERVAL '6 hours'),

-- Critical case - time running out
(4, 'Michael', 'Chen', '1981-11-08', 'male', 'B+',
 '789 Pine Street', 'Los Angeles', 'CA', '90210',
 '+1-323-555-0789', 'michael.chen@email.com',
 'Lisa Chen', '+1-323-555-0790', 'Wife',
 8, 'approved', 'Dr. Michael Chen', 'active', 'deceased',
 CURRENT_TIMESTAMP - INTERVAL '4 hours', CURRENT_TIMESTAMP - INTERVAL '3.5 hours'),

-- Living donors
(5, 'Sarah', 'M.', '1989-07-22', 'female', 'A+',
 '456 Oak Avenue', 'Brooklyn', 'NY', '11201',
 '+1-555-0456', 'sarah.m@email.com',
 'Mike M.', '+1-555-0457', 'Husband',
 1, 'approved', 'Dr. Sarah Johnson', 'active', 'living',
 NULL, NULL),

(6, 'Anita', 'Patel', '1991-12-03', 'female', 'A-',
 '12/3, Koramangala 4th Block', 'Bangalore', 'Karnataka', '560034',
 '+91-99887-76543', 'anita.patel@email.com',
 'Vikram Patel', '+91-99887-76544', 'Brother',
 4, 'approved', 'Dr. Kavitha Reddy', 'active', 'living',
 NULL, NULL);

-- Insert organs with time tracking
INSERT INTO donor_organs (donor_id, organ_type, viability_hours, procurement_time, is_critical) VALUES 
-- John D. (Critical case - Heart and Liver)
(1, 'Heart', 4, CURRENT_TIMESTAMP - INTERVAL '2 hours', TRUE),
(1, 'Liver', 10, CURRENT_TIMESTAMP - INTERVAL '2 hours', FALSE),
(1, 'Kidneys', 36, CURRENT_TIMESTAMP - INTERVAL '2 hours', FALSE),

-- Priya Sharma (Very critical - Heart and Lungs)
(2, 'Heart', 4, CURRENT_TIMESTAMP - INTERVAL '1 hour', TRUE),
(2, 'Lungs', 6, CURRENT_TIMESTAMP - INTERVAL '1 hour', TRUE),
(2, 'Corneas', 120, CURRENT_TIMESTAMP - INTERVAL '1 hour', FALSE),

-- Rajesh Kumar (Longer viability organs)
(3, 'Kidneys', 36, CURRENT_TIMESTAMP - INTERVAL '6 hours', FALSE),
(3, 'Liver', 10, CURRENT_TIMESTAMP - INTERVAL '6 hours', FALSE),
(3, 'Pancreas', 18, CURRENT_TIMESTAMP - INTERVAL '6 hours', FALSE),

-- Michael Chen (Critical - time running out)
(4, 'Heart', 4, CURRENT_TIMESTAMP - INTERVAL '3.5 hours', TRUE),
(4, 'Kidneys', 36, CURRENT_TIMESTAMP - INTERVAL '3.5 hours', FALSE),

-- Living donors (no time constraints)
(5, 'Kidneys', 0, NULL, FALSE),
(5, 'Corneas', 0, NULL, FALSE),

(6, 'Kidneys', 0, NULL, FALSE),
(6, 'Liver', 0, NULL, FALSE);

-- Reset sequence
SELECT setval('organ_donors_id_seq', 6);
