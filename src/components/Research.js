import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const Research = () => {
    const research = [
        { title: "AI in Healthcare", description: "Exploring the impact of AI on patient outcomes." },
        { title: "Blockchain Security", description: "Analyzing vulnerabilities in blockchain systems." },
    ];

    return (
        <Box id="research" sx={{ padding: 3 }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Research
            </Typography>
            {research.map((res, index) => (
                <Card key={index} sx={{ marginBottom: 2, backgroundColor: 'grey.100' }}>
                    <CardContent>
                        <Typography variant="h6">{res.title}</Typography>
                        <Typography variant="body2">{res.description}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default Research;
