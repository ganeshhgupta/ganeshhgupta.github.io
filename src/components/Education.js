import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const Education = () => {
    const education = [
        { degree: "M.S. in Computer Science", institution: "University of Texas at Arlington", year: "2024" },
        { degree: "B.Tech in Information Technology", institution: "ABC University", year: "2020" },
    ];

    return (
        <Box id="education" sx={{ padding: 3 }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Education
            </Typography>
            {education.map((edu, index) => (
                <Card key={index} sx={{ marginBottom: 2, backgroundColor: 'grey.100' }}>
                    <CardContent>
                        <Typography variant="h6">{edu.degree}</Typography>
                        <Typography color="text.secondary">{edu.institution}</Typography>
                        <Typography variant="body2">{edu.year}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default Education;
