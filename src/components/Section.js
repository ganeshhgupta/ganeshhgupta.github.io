import React from 'react';
import { Box, Typography } from '@mui/material';

const Section = ({ id, title, children }) => {
    return (
        <Box
            id={id}
            sx={{
                padding: '50px 20px',
                minHeight: '100vh',
                backgroundColor: id === 'about' ? 'whitesmoke' : 'inherit',
            }}
        >
            <Typography variant="h3" gutterBottom>
                {title}
            </Typography>
            {children}
        </Box>
    );
};

export default Section;
