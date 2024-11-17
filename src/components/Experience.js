import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const Experience = () => {
    const experiences = [
        { role: "Software Engineer", company: "Tech Corp", duration: "2020-2023" },
        { role: "Intern", company: "Innovate Solutions", duration: "2019-2020" },
    ];

    return (
        <Box id="experience" sx={{ padding: 3 }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Experience
            </Typography>
            {experiences.map((exp, index) => (
                <Card key={index} sx={{ marginBottom: 2, backgroundColor: 'grey.100' }}>
                    <CardContent>
                        <Typography variant="h6">{exp.role}</Typography>
                        <Typography color="text.secondary">{exp.company}</Typography>
                        <Typography variant="body2">{exp.duration}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default Experience;
