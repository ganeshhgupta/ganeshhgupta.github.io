import React from 'react';
import { Box } from '@mui/material';

// Consistent section title used across the whole page: a small mono
// eyebrow label plus a left-aligned heading, sharing one content width.
// Replaces the old pattern of every section centering its own ad hoc h4.
const SectionHeading = ({ eyebrow, title }) => (
    <Box sx={{ mb: 4 }}>
        {eyebrow && (
            <Box
                component="span"
                sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.72rem',
                    letterSpacing: '0.08em',
                    color: 'primary.main',
                    display: 'block',
                    mb: 0.75,
                }}
            >
                {eyebrow}
            </Box>
        )}
        <Box
            component="h2"
            sx={{
                fontFamily: '"Raleway", sans-serif',
                fontWeight: 600,
                fontSize: { xs: '1.5rem', sm: '1.75rem' },
                margin: 0,
                color: 'text.primary',
            }}
        >
            {title}
        </Box>
    </Box>
);

export default SectionHeading;
