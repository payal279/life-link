-- Expanded sample data with Indian names and hospitals

-- Additional hospitals (including Indian hospitals)
INSERT INTO hospitals (
    hospital_name, registration_number, address, city, state, zip_code,
    phone, email, contact_person_name, contact_person_title,
    contact_person_phone, contact_person_email, hospital_type,
    bed_capacity, emergency_contact, license_number, status
) VALUES 
-- Indian Hospitals
(
    'All India Institute of Medical Sciences', 'AIIMS-DEL-2024-001',
    'Ansari Nagar, Aurobindo Marg', 'New Delhi', 'Delhi', '110029',
    '+91-11-2658-8500', 'admin@aiims.edu', 'Dr. Rajesh Kumar Sharma', 'Director',
    '+91-11-2658-8501', 'director@aiims.edu', 'teaching',
    2478, '+91-11-2658-8911', 'DL-MED-AIIMS-001', 'approved'
),
(
    'Apollo Hospitals', 'APOLLO-CHN-2024-002',
    '21, Greams Lane, Off Greams Road', 'Chennai', 'Tamil Nadu', '600006',
    '+91-44-2829-3333', 'info@apollohospitals.com', 'Dr. Priya Nair', 'Chief Medical Officer',
    '+91-44-2829-3334', 'priya.nair@apollohospitals.com', 'specialty',
    1000, '+91-44-2829-3911', 'TN-MED-APOLLO-002', 'approved'
),
(
    'Fortis Healthcare', 'FORTIS-GUR-2024-003',
    'Sector 44, Opposite HUDA City Centre', 'Gurugram', 'Haryana', '122002',
    '+91-124-496-2200', 'contact@fortishealthcare.com', 'Dr. Amit Gupta', 'Medical Director',
    '+91-124-496-2201', 'amit.gupta@fortishealthcare.com', 'general',
    650, '+91-124-496-2911', 'HR-MED-FORTIS-003', 'approved'
),
(
    'Manipal Hospital', 'MANIPAL-BLR-2024-004',
    '98, Rustum Bagh, Airport Road', 'Bangalore', 'Karnataka', '560017',
    '+91-80-2502-4444', 'info@manipalhospitals.com', 'Dr. Kavitha Reddy', 'Chief of Surgery',
    '+91-80-2502-4445', 'kavitha.reddy@manipalhospitals.com', 'transplant',
    800, '+91-80-2502-4911', 'KA-MED-MANIPAL-004', 'approved'
),
(
    'Medanta - The Medicity', 'MEDANTA-GUR-2024-005',
    'Sector 38, Near Subhash Chowk', 'Gurugram', 'Haryana', '122001',
    '+91-124-414-1414', 'info@medanta.org', 'Dr. Suresh Advani', 'Chairman Medical Advisory',
    '+91-124-414-1415', 'suresh.advani@medanta.org', 'specialty',
    1250, '+91-124-414-1911', 'HR-MED-MEDANTA-005', 'approved'
),
(
    'Kokilaben Dhirubhai Ambani Hospital', 'KDAH-MUM-2024-006',
    'Rao Saheb Achutrao Patwardhan Marg, Four Bunglows', 'Mumbai', 'Maharashtra', '400053',
    '+91-22-4269-6969', 'info@kokilabenhospital.com', 'Dr. Santosh Shetty', 'Executive Director',
    '+91-22-4269-6970', 'santosh.shetty@kokilabenhospital.com', 'general',
    750, '+91-22-4269-6911', 'MH-MED-KDAH-006', 'approved'
),
-- Additional US Hospitals
(
    'Johns Hopkins Hospital', 'JHH-BAL-2024-007',
    '1800 Orleans Street', 'Baltimore', 'MD', '21287',
    '+1-410-955-5000', 'info@jhmi.edu', 'Dr. Jennifer Martinez', 'Chief Medical Officer',
    '+1-410-955-5001', 'jennifer.martinez@jhmi.edu', 'teaching',
    1154, '+1-410-955-5911', 'MD-MED-JHH-007', 'approved'
),
(
    'Cleveland Clinic', 'CC-CLE-2024-008',
    '9500 Euclid Avenue', 'Cleveland', 'OH', '44195',
    '+1-216-444-2200', 'info@ccf.org', 'Dr. Thomas Anderson', 'Chief of Staff',
    '+1-216-444-2201', 'thomas.anderson@ccf.org', 'specialty',
    1285, '+1-216-444-2911', 'OH-MED-CC-008', 'approved'
),
(
    'Texas Heart Institute', 'THI-HOU-2024-009',
    '6770 Bertner Avenue', 'Houston', 'TX', '77030',
    '+1-832-355-4011', 'info@texasheart.org', 'Dr. Maria Rodriguez', 'Director of Transplant Services',
    '+1-832-355-4012', 'maria.rodriguez@texasheart.org', 'transplant',
    456, '+1-832-355-4911', 'TX-MED-THI-009', 'approved'
);

-- Additional organ donors with Indian names
INSERT INTO organ_donors (
    first_name, last_name, date_of_birth, gender, blood_type,
    address, city, state, zip_code, phone, email,
    emergency_contact_name, emergency_contact_phone, emergency_contact_relation
) VALUES 
-- Indian Donors
(
    'Priya', 'Sharma', '1994-05-12', 'female', 'AB+',
    'A-204, Shanti Apartments, Bandra West', 'Mumbai', 'Maharashtra', '400050',
    '+91-98765-43210', 'priya.sharma@email.com',
    'Rohit Sharma', '+91-98765-43211', 'Husband'
),
(
    'Rajesh', 'Kumar', '1988-09-18', 'male', 'O-',
    '45, Rajouri Garden, Near Metro Station', 'New Delhi', 'Delhi', '110027',
    '+91-98123-45678', 'rajesh.kumar@email.com',
    'Sunita Kumar', '+91-98123-45679', 'Wife'
),
(
    'Anita', 'Patel', '1991-12-03', 'female', 'A-',
    '12/3, Koramangala 4th Block', 'Bangalore', 'Karnataka', '560034',
    '+91-99887-76543', 'anita.patel@email.com',
    'Vikram Patel', '+91-99887-76544', 'Brother'
),
(
    'Kavya', 'Menon', '1990-02-28', 'female', 'AB-',
    '78, T. Nagar, Near Pondy Bazaar', 'Chennai', 'Tamil Nadu', '600017',
    '+91-94444-55666', 'kavya.menon@email.com',
    'Ravi Menon', '+91-94444-55667', 'Father'
),
(
    'Arjun', 'Tiwari', '1996-06-14', 'male', 'A+',
    '23, Jubilee Hills, Road No. 36', 'Hyderabad', 'Telangana', '500033',
    '+91-90123-45678', 'arjun.tiwari@email.com',
    'Meera Tiwari', '+91-90123-45679', 'Mother'
),
(
    'Sneha', 'Rao', '1998-08-22', 'female', 'O-',
    '67, Kothrud, Near Karve Road', 'Pune', 'Maharashtra', '411038',
    '+91-97654-32109', 'sneha.rao@email.com',
    'Anil Rao', '+91-97654-32110', 'Father'
),
(
    'Vikram', 'Singh', '1985-11-07', 'male', 'B+',
    '156, Civil Lines, Near Clock Tower', 'Jaipur', 'Rajasthan', '302006',
    '+91-96543-21098', 'vikram.singh@email.com',
    'Pooja Singh', '+91-96543-21099', 'Wife'
),
(
    'Deepika', 'Joshi', '1993-04-16', 'female', 'O+',
    '89, Salt Lake City, Sector V', 'Kolkata', 'West Bengal', '700091',
    '+91-95432-10987', 'deepika.joshi@email.com',
    'Amit Joshi', '+91-95432-10988', 'Husband'
),
(
    'Rahul', 'Agarwal', '1987-01-25', 'male', 'A-',
    '34, Gomti Nagar, Near Phoenix Mall', 'Lucknow', 'Uttar Pradesh', '226010',
    '+91-94321-09876', 'rahul.agarwal@email.com',
    'Priyanka Agarwal', '+91-94321-09877', 'Wife'
),
(
    'Neha', 'Gupta', '1992-10-11', 'female', 'B-',
    '123, Model Town, Near Sector 15', 'Chandigarh', 'Chandigarh', '160022',
    '+91-93210-98765', 'neha.gupta@email.com',
    'Rajiv Gupta', '+91-93210-98766', 'Father'
),
-- Additional US Donors
(
    'David', 'Lee', '1989-07-30', 'male', 'B-',
    '456 Oak Street, Apartment 3B', 'Chicago', 'IL', '60614',
    '+1-312-555-0987', 'david.lee@email.com',
    'Jennifer Lee', '+1-312-555-0988', 'Wife'
),
(
    'Lisa', 'Chen', '1995-03-08', 'female', 'B+',
    '789 Sunset Boulevard', 'Miami', 'FL', '33139',
    '+1-305-555-0321', 'lisa.chen@email.com',
    'Mark Chen', '+1-305-555-0322', 'Brother'
),
(
    'Robert', 'Wilson', '1984-12-19', 'male', 'O+',
    '321 Main Street, Suite 5A', 'Houston', 'TX', '77002',
    '+1-713-555-0654', 'robert.wilson@email.com',
    'Sarah Wilson', '+1-713-555-0655', 'Wife'
),
(
    'Amanda', 'Taylor', '1991-09-05', 'female', 'A+',
    '654 Pine Avenue', 'Seattle', 'WA', '98101',
    '+1-206-555-0789', 'amanda.taylor@email.com',
    'James Taylor', '+1-206-555-0790', 'Husband'
),
(
    'Christopher', 'Brown', '1986-06-12', 'male', 'AB+',
    '987 Elm Street', 'Boston', 'MA', '02101',
    '+1-617-555-0456', 'christopher.brown@email.com',
    'Michelle Brown', '+1-617-555-0457', 'Wife'
);

-- Additional organizations (including Indian organizations)
INSERT INTO organizations (
    organization_name, organization_type, registration_number,
    address, city, state, zip_code, phone, email,
    director_name, director_email, director_phone,
    contact_person_name, contact_person_title, contact_person_phone, contact_person_email,
    services_provided, years_in_operation, mission_statement, status
) VALUES 
-- Indian Organizations
(
    'National Organ & Tissue Transplant Organisation', 'government', 'NOTTO-IND-2024-001',
    'Safdarjung Hospital Campus, New Delhi', 'New Delhi', 'Delhi', '110029',
    '+91-11-2670-4994', 'info@notto.gov.in',
    'Dr. Anil Kumar', 'director@notto.gov.in', '+91-11-2670-4995',
    'Priya Sharma', 'Program Coordinator', '+91-11-2670-4996', 'priya.sharma@notto.gov.in',
    'National organ donation coordination, policy development, transplant registry management',
    12, 'To promote organ donation and transplantation across India through systematic coordination and awareness.',
    'approved'
),
(
    'MOHAN Foundation', 'nonprofit', 'MOHAN-CHN-2024-002',
    '267-B, TTK Road, Alwarpet', 'Chennai', 'Tamil Nadu', '600018',
    '+91-44-2498-0443', 'info@mohanfoundation.org',
    'Dr. Sunil Shroff', 'managing.trustee@mohanfoundation.org', '+91-44-2498-0444',
    'Lalitha Raghuram', 'CEO', '+91-44-2498-0445', 'lalitha@mohanfoundation.org',
    'Organ donation awareness, family counseling, transplant coordination, training programs',
    28, 'To promote organ donation and transplantation in India through education, awareness and coordination.',
    'approved'
),
(
    'Zonal Transplant Coordination Centre - West', 'government', 'ZTCC-W-MUM-2024-003',
    'Seth G.S. Medical College, Parel', 'Mumbai', 'Maharashtra', '400012',
    '+91-22-2416-7000', 'ztccwest@gmail.com',
    'Dr. Bharat Shah', 'bharat.shah@ztccwest.org', '+91-22-2416-7001',
    'Kavita Patel', 'Transplant Coordinator', '+91-22-2416-7002', 'kavita.patel@ztccwest.org',
    'Regional organ allocation, transplant coordination, donor-recipient matching',
    15, 'To ensure equitable organ allocation and successful transplantation in Western India.',
    'approved'
),
(
    'Donate Life India', 'nonprofit', 'DLI-BLR-2024-004',
    '45, Richmond Road, Bangalore', 'Bangalore', 'Karnataka', '560025',
    '+91-80-4112-5555', 'contact@donatelifeindia.org',
    'Dr. Ravi Kumar', 'ravi.kumar@donatelifeindia.org', '+91-80-4112-5556',
    'Anitha Menon', 'Operations Head', '+91-80-4112-5557', 'anitha.menon@donatelifeindia.org',
    'Organ donation awareness campaigns, donor registration, family support services',
    8, 'To create awareness about organ donation and increase donation rates across India.',
    'approved'
),
-- Additional US Organizations
(
    'United Network for Organ Sharing', 'nonprofit', 'UNOS-RIC-2024-005',
    '700 North 4th Street', 'Richmond', 'VA', '23219',
    '+1-804-782-4800', 'info@unos.org',
    'Dr. Brian Shepard', 'brian.shepard@unos.org', '+1-804-782-4801',
    'Anne Paschke', 'Communications Director', '+1-804-782-4802', 'anne.paschke@unos.org',
    'National organ allocation system, transplant data management, policy development',
    35, 'To advance organ availability and transplantation by uniting and supporting communities.',
    'approved'
),
(
    'Donate Life America', 'nonprofit', 'DLA-RIC-2024-006',
    '701 East Byrd Street, Suite 200', 'Richmond', 'VA', '23219',
    '+1-804-377-3580', 'info@donatelife.net',
    'David Fleming', 'david.fleming@donatelife.net', '+1-804-377-3581',
    'Alexandra Glazier', 'President & CEO', '+1-804-377-3582', 'alexandra.glazier@donatelife.net',
    'Public awareness campaigns, donor registration, community outreach programs',
    20, 'To inspire all people to Donate Life through organ, eye and tissue donation.',
    'approved'
);

-- Additional donor organs for new donors
INSERT INTO donor_organs (donor_id, organ_type) VALUES 
-- For Priya Sharma (donor_id 4)
(4, 'Heart'),
(4, 'Corneas'),
-- For Rajesh Kumar (donor_id 5)
(5, 'Kidneys'),
(5, 'Liver'),
(5, 'Pancreas'),
-- For Anita Patel (donor_id 6)
(6, 'Lungs'),
(6, 'Corneas'),
-- For Kavya Menon (donor_id 7)
(7, 'Liver'),
(7, 'Small Intestine'),
-- For Arjun Tiwari (donor_id 8)
(8, 'Heart'),
(8, 'Lungs'),
(8, 'Kidneys'),
-- For Sneha Rao (donor_id 9)
(9, 'Kidneys'),
(9, 'Pancreas'),
-- For Vikram Singh (donor_id 10)
(10, 'Liver'),
(10, 'Corneas'),
-- For Deepika Joshi (donor_id 11)
(11, 'Heart'),
(11, 'Kidneys'),
-- For Rahul Agarwal (donor_id 12)
(12, 'Lungs'),
(12, 'Pancreas'),
-- For Neha Gupta (donor_id 13)
(13, 'Liver'),
(13, 'Corneas'),
-- For David Lee (donor_id 14)
(14, 'Heart'),
(14, 'Kidneys'),
-- For Lisa Chen (donor_id 15)
(15, 'Liver'),
(15, 'Corneas'),
-- For Robert Wilson (donor_id 16)
(16, 'Pancreas'),
(16, 'Corneas'),
-- For Amanda Taylor (donor_id 17)
(17, 'Kidneys'),
(17, 'Lungs'),
-- For Christopher Brown (donor_id 18)
(18, 'Heart'),
(18, 'Liver');

-- Sample search logs
INSERT INTO search_logs (
    hospital_id, organ_type, blood_type, location, urgency_level, results_count
) VALUES 
(1, 'Heart', 'O+', 'New York, NY', 'critical', 3),
(2, 'Kidney', 'A+', 'Los Angeles, CA', 'urgent', 5),
(3, 'Liver', 'B+', 'Gurugram, Haryana', 'standard', 2),
(4, 'Lungs', 'AB-', 'Bangalore, Karnataka', 'critical', 1),
(5, 'Pancreas', 'O-', 'Gurugram, Haryana', 'urgent', 4);
