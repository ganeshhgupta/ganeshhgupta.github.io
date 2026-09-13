import React from 'react';
import { Card, CardContent, Typography, Grid, Box, CardMedia, CardActionArea } from '@mui/material';

const research = [
    {
        title: "Event-Based Histogram of Gradients for Lane Detection",
        description: "Explores Vision Transformers for tracking moving objects in low-light conditions with ultra-low latency, using event-based camera data. Computes Histogram of Gradients features at specific timestamps to capture shape and appearance through gradient distributions, improving real-time object tracking accuracy in dynamic, low-light environments.",
        image: "./images/ebc.png",
        link: "https://mavmatrix.uta.edu/cgi/viewcontent.cgi?article=1531&context=cse_theses"
    },
    {
        title: "Emotion Detection using Haar Cascades",
        description: "Proposes an online recommendation system that uses real-time facial expression detection to personalize product suggestions without relying on historical data. Analyzes five facial expressions via deep learning, achieving 75% emotion detection accuracy to drive real-time, emotion-aware recommendations.",
        image: "./images/emotions.png",
        link: "https://www.researchgate.net/publication/360663867_Emotion_detection_for_online_recommender_system_using_deep_learning_a_proposed_method"
    }
];

const Research = () => {
    return (
        <Box id="research" sx={{ padding: { xs: 3, sm: 5 } }}>
            <Typography variant="h4" sx={{ marginBottom: 3, textAlign: 'center' }}>
                Research
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {research.map((item, index) => (
                    <Grid item xs={12} sm={6} md={5} key={index}>
                        <Card sx={{ width: '100%', maxWidth: 420, height: '100%' }}>
                            <CardActionArea href={item.link} target="_blank" rel="noopener noreferrer" sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                                <CardMedia component="img" height="150" image={item.image} alt={item.title} />
                                <CardContent>
                                    <Typography variant="h6" sx={{ marginBottom: 1 }}>
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
