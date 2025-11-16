-- Create database schema for LifeLink organ donation system

-- Hospitals table
CREATE TABLE hospitals (
    id SERIAL PRIMARY KEY,
    hospital_name VARCHAR(255) NOT NULL,
    registration_number VARCHAR(100) UNIQUE NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    zip_code VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL DEFAULT 'USA',
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    website VARCHAR(255),
    contact_person_name VARCHAR(255) NOT NULL,
    contact_person_title VARCHAR(255) NOT NULL,
    contact_person_phone VARCHAR(20) NOT NULL,
    contact_person_email VARCHAR(255) NOT NULL,
    hospital_type VARCHAR(50) NOT NULL,
    bed_capacity INTEGER NOT NULL,
    specializations TEXT,
    emergency_contact VARCHAR(20) NOT NULL,
    license_number VARCHAR(100) NOT NULL,
    accreditation TEXT,
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Organ donors table
CREATE TABLE organ_donors (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender VARCHAR(10) NOT NULL,
    blood_type VARCHAR(5) NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    zip_code VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL DEFAULT 'USA',
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    emergency_contact_name VARCHAR(255) NOT NULL,
    emergency_contact_phone VARCHAR(20) NOT NULL,
    emergency_contact_relation VARCHAR(100) NOT NULL,
    medical_history TEXT,
    current_medications TEXT,
    allergies TEXT,
    tissues_donate BOOLEAN DEFAULT FALSE,
    eyes_donate BOOLEAN DEFAULT FALSE,
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    hospital_id INTEGER REFERENCES hospitals(id) ON DELETE SET NULL,
    registration_date DATE DEFAULT CURRENT_DATE,
    medical_clearance_status VARCHAR(20) DEFAULT 'pending',
    assigned_doctor VARCHAR(255)
);

-- Organizations table
CREATE TABLE organizations (
    id SERIAL PRIMARY KEY,
    organization_name VARCHAR(255) NOT NULL,
    organization_type VARCHAR(100) NOT NULL,
    registration_number VARCHAR(100) UNIQUE NOT NULL,
    tax_id VARCHAR(50),
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    zip_code VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL DEFAULT 'USA',
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    website VARCHAR(255),
    director_name VARCHAR(255) NOT NULL,
    director_email VARCHAR(255) NOT NULL,
    director_phone VARCHAR(20) NOT NULL,
    contact_person_name VARCHAR(255) NOT NULL,
    contact_person_title VARCHAR(255) NOT NULL,
    contact_person_phone VARCHAR(20) NOT NULL,
    contact_person_email VARCHAR(255) NOT NULL,
    services_provided TEXT NOT NULL,
    years_in_operation INTEGER NOT NULL,
    license_number VARCHAR(100),
    accreditation TEXT,
    mission_statement TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Donor organs table (many-to-many relationship)
CREATE TABLE donor_organs (
    id SERIAL PRIMARY KEY,
    donor_id INTEGER REFERENCES organ_donors(id) ON DELETE CASCADE,
    organ_type VARCHAR(50) NOT NULL,
    availability_status VARCHAR(20) DEFAULT 'available',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Search logs table (for tracking emergency searches)
CREATE TABLE search_logs (
    id SERIAL PRIMARY KEY,
    hospital_id INTEGER REFERENCES hospitals(id),
    organ_type VARCHAR(50) NOT NULL,
    blood_type VARCHAR(5) NOT NULL,
    location VARCHAR(255),
    urgency_level VARCHAR(20),
    results_count INTEGER DEFAULT 0,
    search_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_donors_blood_type ON organ_donors(blood_type);
CREATE INDEX idx_donors_location ON organ_donors(city, state, zip_code);
CREATE INDEX idx_donors_hospital ON organ_donors(hospital_id);
CREATE INDEX idx_donor_organs_type ON donor_organs(organ_type);
CREATE INDEX idx_donor_organs_status ON donor_organs(availability_status);
CREATE INDEX idx_hospitals_location ON hospitals(city, state, zip_code);
CREATE INDEX idx_search_logs_timestamp ON search_logs(search_timestamp);
