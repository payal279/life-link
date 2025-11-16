-- Complete donor data that matches our search functionality
-- This includes all the donors that appear in our search results

-- Clear existing donor data first
DELETE FROM donor_organs;
DELETE FROM organ_donors;

-- Insert all donors that appear in search results
INSERT INTO organ_donors (
    id, first_name, last_name, date_of_birth, gender, blood_type,
    address, city, state, zip_code, phone, email,
    emergency_contact_name, emergency_contact_phone, emergency_contact_relation,
    hospital_id, medical_clearance_status, assigned_doctor, status
) VALUES 
-- Original US donors
(1, 'John', 'D.', '1995-03-15', 'male', 'O+',
 '123 Main Street', 'New York', 'NY', '10001',
 '+1-555-0123', 'john.d@email.com',
 'Jane D.', '+1-555-0124', 'Wife',
 1, 'approved', 'Dr. Sarah Johnson', 'active'),

(2, 'Sarah', 'M.', '1989-07-22', 'female', 'A+',
 '456 Oak Avenue', 'Brooklyn', 'NY', '11201',
 '+1-555-0456', 'sarah.m@email.com',
 'Mike M.', '+1-555-0457', 'Husband',
 1, 'approved', 'Dr. Sarah Johnson', 'active'),

(3, 'Michael', 'R.', '1981-11-08', 'male', 'B+',
 '789 Pine Street', 'Queens', 'NY', '11354',
 '+1-555-0789', 'michael.r@email.com',
 'Lisa R.', '+1-555-0790', 'Wife',
 1, 'approved', 'Dr. Sarah Johnson', 'active'),

-- Indian donors
(4, 'Priya', 'Sharma', '1994-05-12', 'female', 'AB+',
 'A-204, Shanti Apartments, Bandra West', 'Mumbai', 'Maharashtra', '400050',
 '+91-98765-43210', 'priya.sharma@email.com',
 'Rohit Sharma', '+91-98765-43211', 'Husband',
 6, 'approved', 'Dr. Santosh Shetty', 'active'),

(5, 'Rajesh', 'Kumar', '1988-09-18', 'male', 'O-',
 '45, Rajouri Garden, Near Metro Station', 'New Delhi', 'Delhi', '110027',
 '+91-98123-45678', 'rajesh.kumar@email.com',
 'Sunita Kumar', '+91-98123-45679', 'Wife',
 1, 'approved', 'Dr. Rajesh Kumar Sharma', 'active'),

(6, 'Anita', 'Patel', '1991-12-03', 'female', 'A-',
 '12/3, Koramangala 4th Block', 'Bangalore', 'Karnataka', '560034',
 '+91-99887-76543', 'anita.patel@email.com',
 'Vikram Patel', '+91-99887-76544', 'Brother',
 4, 'approved', 'Dr. Kavitha Reddy', 'active'),

(7, 'David', 'Lee', '1997-02-28', 'male', 'B-',
 '321 Harbor View', 'Baltimore', 'MD', '21201',
 '+1-312-555-0987', 'david.lee@email.com',
 'Jennifer Lee', '+1-312-555-0988', 'Wife',
 7, 'approved', 'Dr. Jennifer Martinez', 'active'),

(8, 'Kavya', 'Menon', '1990-02-28', 'female', 'AB-',
 '78, T. Nagar, Near Pondy Bazaar', 'Chennai', 'Tamil Nadu', '600017',
 '+91-94444-55666', 'kavya.menon@email.com',
 'Ravi Menon', '+91-94444-55667', 'Father',
 2, 'approved', 'Dr. Priya Nair', 'active'),

(9, 'Robert', 'Wilson', '1984-12-19', 'male', 'O+',
 '321 Main Street, Suite 5A', 'Houston', 'TX', '77002',
 '+1-713-555-0654', 'robert.wilson@email.com',
 'Sarah Wilson', '+1-713-555-0655', 'Wife',
 9, 'approved', 'Dr. Maria Rodriguez', 'active'),

(10, 'Arjun', 'Tiwari', '1996-06-14', 'male', 'A+',
 '23, Jubilee Hills, Road No. 36', 'Hyderabad', 'Telangana', '500033',
 '+91-90123-45678', 'arjun.tiwari@email.com',
 'Meera Tiwari', '+91-90123-45679', 'Mother',
 3, 'approved', 'Dr. Amit Gupta', 'active'),

(11, 'Lisa', 'Chen', '1993-03-08', 'female', 'B+',
 '789 Sunset Boulevard', 'Miami', 'FL', '33139',
 '+1-305-555-0321', 'lisa.chen@email.com',
 'Mark Chen', '+1-305-555-0322', 'Brother',
 8, 'approved', 'Dr. Michael Chen', 'active'),

(12, 'Sneha', 'Rao', '1998-08-22', 'female', 'O-',
 '67, Kothrud, Near Karve Road', 'Pune', 'Maharashtra', '411038',
 '+91-97654-32109', 'sneha.rao@email.com',
 'Anil Rao', '+91-97654-32110', 'Father',
 6, 'approved', 'Dr. Santosh Shetty', 'active'),

-- Additional donors
(13, 'Vikram', 'Singh', '1991-11-07', 'male', 'B+',
 '156, Civil Lines, Near Clock Tower', 'Jaipur', 'Rajasthan', '302006',
 '+91-96543-21098', 'vikram.singh@email.com',
 'Pooja Singh', '+91-96543-21099', 'Wife',
 3, 'approved', 'Dr. Amit Gupta', 'active'),

(14, 'Deepika', 'Joshi', '1995-04-16', 'female', 'O+',
 '89, Salt Lake City, Sector V', 'Kolkata', 'West Bengal', '700091',
 '+91-95432-10987', 'deepika.joshi@email.com',
 'Amit Joshi', '+91-95432-10988', 'Husband',
 2, 'approved', 'Dr. Priya Nair', 'active'),

(15, 'Rahul', 'Agarwal', '1987-01-25', 'male', 'A-',
 '34, Gomti Nagar, Near Phoenix Mall', 'Lucknow', 'Uttar Pradesh', '226010',
 '+91-94321-09876', 'rahul.agarwal@email.com',
 'Priyanka Agarwal', '+91-94321-09877', 'Wife',
 1, 'approved', 'Dr. Rajesh Kumar Sharma', 'active'),

(16, 'Neha', 'Gupta', '1992-10-11', 'female', 'B-',
 '123, Model Town, Near Sector 15', 'Chandigarh', 'Chandigarh', '160022',
 '+91-93210-98765', 'neha.gupta@email.com',
 'Rajiv Gupta', '+91-93210-98766', 'Father',
 3, 'approved', 'Dr. Amit Gupta', 'active'),

(17, 'Amanda', 'Taylor', '1994-09-05', 'female', 'A+',
 '654 Pine Avenue', 'Seattle', 'WA', '98101',
 '+1-206-555-0789', 'amanda.taylor@email.com',
 'James Taylor', '+1-206-555-0790', 'Husband',
 8, 'approved', 'Dr. Thomas Anderson', 'active'),

(18, 'Christopher', 'Brown', '1986-06-12', 'male', 'AB+',
 '987 Elm Street', 'Boston', 'MA', '02101',
 '+1-617-555-0456', 'christopher.brown@email.com',
 'Michelle Brown', '+1-617-555-0457', 'Wife',
 7, 'approved', 'Dr. Jennifer Martinez', 'active'),

-- Some donors with pending status
(19, 'Ravi', 'Kumar', '1999-03-10', 'male', 'O+',
 '45, Electronic City, Phase 1', 'Bangalore', 'Karnataka', '560100',
 '+91-98765-12345', 'ravi.kumar@email.com',
 'Sunita Kumar', '+91-98765-12346', 'Mother',
 4, 'pending', 'Dr. Kavitha Reddy', 'active'),

(20, 'Jennifer', 'Martinez', '1990-07-18', 'female', 'A-',
 '123 Desert View Drive', 'Phoenix', 'AZ', '85001',
 '+1-602-555-0987', 'jennifer.martinez@email.com',
 'Carlos Martinez', '+1-602-555-0988', 'Husband',
 9, 'under_review', 'Dr. Maria Rodriguez', 'active');

-- Insert donor organs for all donors
INSERT INTO donor_organs (donor_id, organ_type) VALUES 
-- John D. (D001)
(1, 'Heart'), (1, 'Liver'), (1, 'Kidneys'),
-- Sarah M. (D002)
(2, 'Kidneys'), (2, 'Corneas'),
-- Michael R. (D003)
(3, 'Liver'), (3, 'Pancreas'),
-- Priya Sharma (D004)
(4, 'Heart'), (4, 'Corneas'),
-- Rajesh Kumar (D005)
(5, 'Kidneys'), (5, 'Liver'), (5, 'Pancreas'),
-- Anita Patel (D006)
(6, 'Lungs'), (6, 'Corneas'),
-- David Lee (D007)
(7, 'Heart'), (7, 'Kidneys'),
-- Kavya Menon (D008)
(8, 'Liver'), (8, 'Small Intestine'),
-- Robert Wilson (D009)
(9, 'Pancreas'), (9, 'Corneas'),
-- Arjun Tiwari (D010)
(10, 'Heart'), (10, 'Lungs'), (10, 'Kidneys'),
-- Lisa Chen (D011)
(11, 'Liver'), (11, 'Corneas'),
-- Sneha Rao (D012)
(12, 'Kidneys'), (12, 'Pancreas'),
-- Vikram Singh (D013)
(13, 'Liver'), (13, 'Corneas'),
-- Deepika Joshi (D014)
(14, 'Heart'), (14, 'Kidneys'),
-- Rahul Agarwal (D015)
(15, 'Lungs'), (15, 'Pancreas'),
-- Neha Gupta (D016)
(16, 'Liver'), (16, 'Corneas'),
-- Amanda Taylor (D017)
(17, 'Kidneys'), (17, 'Lungs'),
-- Christopher Brown (D018)
(18, 'Heart'), (18, 'Liver'),
-- Ravi Kumar (D019)
(19, 'Heart'), (19, 'Kidneys'), (19, 'Liver'),
-- Jennifer Martinez (D020)
(20, 'Lungs'), (20, 'Pancreas');

-- Reset sequence to continue from 21
SELECT setval('organ_donors_id_seq', 20);
