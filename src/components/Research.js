import React from 'react';
import { Card, CardContent, Typography, Grid, Box, CardMedia, CardActionArea } from '@mui/material';

const Research = () => {
    const research = [
        { 
            title: "Low-latency motion detection using HoG from Event-Based Cameras", 
            description: "Exploring the impact of AI on patient outcomes.", 
            image: "./images/ebc.png", // Path to image (you need to provide the image)
            link: "https://example.com/ai-in-healthcare" 
        },
        { 
            title: "Emotion Detection using Haar Cascades", 
            description: "Analyzing vulnerabilities in blockchain systems.", 
            image: "./images/emotions.png", // Path to image (you need to provide the image)
            link: "https://example.com/blockchain-security" 
        }
    ];

    return (
        <Box id="research" sx={{ padding: 3 }}>
            <Typography variant="h4" sx={{ 
                marginBottom: 4, 
                marginTop: 4, // Add margin-top to create space between sections
                fontFamily: '"Raleway", serif',
                textAlign: 'center' // Center align the text
            }}>
                Research
            </Typography>
            <Grid 
                container 
                spacing={4} 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    '& > .MuiGrid-item': {
                        display: 'flex',
                        justifyContent: 'center',
                    }
                }}
            >
                {research.map((item, index) => (
                    <Grid item xs={12} sm={4} md={4} lg={4} key={index}>
                        <Card
                            sx={{
                                width: '100%',
                                maxWidth: 400, // Adjusted width for a wider card
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    transition: 'transform 0.3s ease',
                                },
                                transition: 'transform 0.3s ease',
                                boxShadow: 3,
                            }}
                        >
                            <CardActionArea href={item.link} target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.image} // Image path
                                    alt={item.title}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Research;
