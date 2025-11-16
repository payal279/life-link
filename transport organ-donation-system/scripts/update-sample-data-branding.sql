-- Update sample data to reflect In-Need branding

-- Update organization data to reference In-Need instead of LifeLink
UPDATE organizations 
SET mission_statement = REPLACE(mission_statement, 'LifeLink', 'In-Need')
WHERE mission_statement LIKE '%LifeLink%';

-- Update any email addresses in sample data
UPDATE hospitals 
SET email = REPLACE(email, 'lifelink', 'inneed')
WHERE email LIKE '%lifelink%';

UPDATE organ_donors 
SET email = REPLACE(email, 'lifelink', 'inneed')
WHERE email LIKE '%lifelink%';

UPDATE organizations 
SET email = REPLACE(email, 'lifelink', 'inneed'),
    director_email = REPLACE(director_email, 'lifelink', 'inneed'),
    contact_person_email = REPLACE(contact_person_email, 'lifelink', 'inneed')
WHERE email LIKE '%lifelink%' 
   OR director_email LIKE '%lifelink%' 
   OR contact_person_email LIKE '%lifelink%';
