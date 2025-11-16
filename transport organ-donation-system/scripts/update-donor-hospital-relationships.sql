-- Update existing donors to be connected with hospitals
-- First, let's assign donors to hospitals based on their location

-- Indian donors connected to Indian hospitals
UPDATE organ_donors SET 
    hospital_id = 3, -- AIIMS Delhi
    assigned_doctor = 'Dr. Rajesh Kumar Sharma',
    medical_clearance_status = 'approved'
WHERE first_name = 'Rajesh' AND last_name = 'Kumar';

UPDATE organ_donors SET 
    hospital_id = 4, -- Apollo Chennai
    assigned_doctor = 'Dr. Priya Nair',
    medical_clearance_status = 'approved'
WHERE first_name = 'Kavya' AND last_name = 'Menon';

UPDATE organ_donors SET 
    hospital_id = 6, -- Manipal Bangalore
    assigned_doctor = 'Dr. Kavitha Reddy',
    medical_clearance_status = 'approved'
WHERE first_name = 'Anita' AND last_name = 'Patel';

UPDATE organ_donors SET 
    hospital_id = 8, -- Kokilaben Mumbai
    assigned_doctor = 'Dr. Santosh Shetty',
    medical_clearance_status = 'approved'
WHERE first_name = 'Priya' AND last_name = 'Sharma';

UPDATE organ_donors SET 
    hospital_id = 5, -- Fortis Gurugram
    assigned_doctor = 'Dr. Amit Gupta',
    medical_clearance_status = 'pending'
WHERE first_name = 'Arjun' AND last_name = 'Tiwari';

UPDATE organ_donors SET 
    hospital_id = 8, -- Kokilaben Mumbai (covers Maharashtra)
    assigned_doctor = 'Dr. Santosh Shetty',
    medical_clearance_status = 'approved'
WHERE first_name = 'Sneha' AND last_name = 'Rao';

-- Additional Indian donors
UPDATE organ_donors SET 
    hospital_id = 3, -- AIIMS Delhi (covers North India)
    assigned_doctor = 'Dr. Rajesh Kumar Sharma',
    medical_clearance_status = 'approved'
WHERE first_name = 'Vikram' AND last_name = 'Singh';

UPDATE organ_donors SET 
    hospital_id = 4, -- Apollo Chennai (covers East India)
    assigned_doctor = 'Dr. Priya Nair',
    medical_clearance_status = 'approved'
WHERE first_name = 'Deepika' AND last_name = 'Joshi';

UPDATE organ_donors SET 
    hospital_id = 3, -- AIIMS Delhi (covers North India)
    assigned_doctor = 'Dr. Rajesh Kumar Sharma',
    medical_clearance_status = 'pending'
WHERE first_name = 'Rahul' AND last_name = 'Agarwal';

UPDATE organ_donors SET 
    hospital_id = 5, -- Fortis Gurugram (covers North India)
    assigned_doctor = 'Dr. Amit Gupta',
    medical_clearance_status = 'approved'
WHERE first_name = 'Neha' AND last_name = 'Gupta';

-- US donors connected to US hospitals
UPDATE organ_donors SET 
    hospital_id = 1, -- Metropolitan General Hospital NY
    assigned_doctor = 'Dr. Sarah Johnson',
    medical_clearance_status = 'approved'
WHERE first_name = 'John' AND last_name = 'Doe';

UPDATE organ_donors SET 
    hospital_id = 1, -- Metropolitan General Hospital NY
    assigned_doctor = 'Dr. Sarah Johnson',
    medical_clearance_status = 'approved'
WHERE first_name = 'Sarah' AND last_name = 'Miller';

UPDATE organ_donors SET 
    hospital_id = 1, -- Metropolitan General Hospital NY
    assigned_doctor = 'Dr. Sarah Johnson',
    medical_clearance_status = 'approved'
WHERE first_name = 'Michael' AND last_name = 'Rodriguez';

UPDATE organ_donors SET 
    hospital_id = 9, -- Johns Hopkins Baltimore
    assigned_doctor = 'Dr. Jennifer Martinez',
    medical_clearance_status = 'approved'
WHERE first_name = 'David' AND last_name = 'Lee';

UPDATE organ_donors SET 
    hospital_id = 2, -- St. Mary's Transplant Center LA
    assigned_doctor = 'Dr. Michael Chen',
    medical_clearance_status = 'approved'
WHERE first_name = 'Lisa' AND last_name = 'Chen';

UPDATE organ_donors SET 
    hospital_id = 11, -- Texas Heart Institute Houston
    assigned_doctor = 'Dr. Maria Rodriguez',
    medical_clearance_status = 'approved'
WHERE first_name = 'Robert' AND last_name = 'Wilson';

UPDATE organ_donors SET 
    hospital_id = 10, -- Cleveland Clinic
    assigned_doctor = 'Dr. Thomas Anderson',
    medical_clearance_status = 'pending'
WHERE first_name = 'Amanda' AND last_name = 'Taylor';

UPDATE organ_donors SET 
    hospital_id = 9, -- Johns Hopkins Baltimore
    assigned_doctor = 'Dr. Jennifer Martinez',
    medical_clearance_status = 'approved'
WHERE first_name = 'Christopher' AND last_name = 'Brown';
