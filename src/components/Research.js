import React from 'react';
import { Card, CardContent, Typography, Grid, Box, CardMedia, CardActionArea } from '@mui/material';

const Research = () => {
    const research = [
        { 
            title: "Low-latency motion detection using HoG from Event-Based Cameras (Ongoing)", 
            description: "This research explores the application of Vision Transformers (ViTs) for tracking moving objects in low light conditions with ultra-low latency. Leveraging datasets from Event-Based Cameras, we focus on computing the Histogram of Gradients (HoG) of features at specific timestamps, which are known for their effectiveness in capturing shape and appearance information through gradient distributions. The study aims to enhance the performance of ViTs in dynamic, low-light environments, providing a novel approach for real-time object tracking with improved accuracy and efficiency.",
            image: "./images/ebc.png", // Path to image (you need to provide the image)
            link: "https://www.linkedin.com/posts/cseuta_uta-cse-research-activity-7290430085621288961-yKdw?utm_source=share&utm_medium=member_desktop" 
        },
        { 
            title: "Emotion Detection using Haar Cascades", 
            description: "This research proposes a novel online recommendation system that uses real-time human facial expression-based emotion detection to personalize product suggestions. By capturing a user's facial expressions via a webcam during online shopping, the system predicts their emotions and offers tailored recommendations without relying on historical data. The system employs deep learning techniques to analyze five different facial expressions and achieve a 75% emotion detection accuracy. The goal is to enhance the online shopping experience by creating a virtual environment with real-time product recommendations based on emotional reactions.", 
            image: "./images/emotions.png", // Path to image (you need to provide the image)
            link: "https://www.researchgate.net/publication/360663867_Emotion_detection_for_online_recommender_system_using_deep_learning_a_proposed_method" 
        }
    ];

    return (
        <Box id="research" sx={{ padding: 3 }}>
            <Typography variant="h4" sx={{ 
                marginBottom: 4, 
                marginTop: 0, // Add margin-top to create space between sections
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
                                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
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
