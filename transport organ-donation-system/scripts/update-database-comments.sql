-- Update database comments to reflect In-Need branding

COMMENT ON DATABASE postgres IS 'In-Need organ donation management system database';

-- Update table comments
COMMENT ON TABLE hospitals IS 'Medical institutions registered with In-Need for organ donation coordination';
COMMENT ON TABLE organ_donors IS 'Individuals registered as organ donors through In-Need platform';
COMMENT ON TABLE organizations IS 'Organ donation organizations partnered with In-Need';
COMMENT ON TABLE donor_organs IS 'Specific organs available for donation through In-Need network';
COMMENT ON TABLE search_logs IS 'Emergency organ search logs from In-Need platform';

-- Update view comments
COMMENT ON VIEW donor_hospital_view IS 'Complete donor information with hospital affiliations for In-Need system';
COMMENT ON VIEW emergency_donor_search IS 'Optimized view for emergency organ searches in In-Need platform';
COMMENT ON VIEW hospital_donor_dashboard IS 'Hospital dashboard data for In-Need management interface';
