import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const About = () => {
    return (
        <Box id="about" sx={{ padding: 3 }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                About
            </Typography>
            <Card sx={{ backgroundColor: 'grey.100' }}>
                <CardContent>
                    <Typography variant="body1">
                        Hello! I'm Ganesh Gupta, a passionate software developer with experience in building web
                        applications, conducting research, and exploring innovative solutions to complex problems.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default About;
