import React from 'react';
import { Card, CardContent, Typography, Grid, Box, CardMedia, CardActionArea } from '@mui/material';

const Projects = () => {
    const projects = [
        { 
            title: "Low Latency Motion Tracking using Vision Transformer", 
            description: "A React-based portfolio showcasing my work.", 
            image: "./images/1.png", // Path to image (you need to provide the image path)
            link: "http://localhost:3001/" 
        },
        { 
            title: "Portfolio Website", 
            description: "Community Detection in Social Networks.", 
            image: "./images/2.png", // Path to image (you need to provide the image path)
            link: "https://portfolio.com" 
        },
        { 
            title: "Caltech 256 Object Classifier", 
            description: "A React-based portfolio showcasing my work.", 
            image: "./images/3.png", // Path to image (you need to provide the image path)
            link: "https://portfolio.com" 
        },
        { 
            title: "Innovative Data Intelligence Research Lab Challenge", 
            description: "Innovative Data Intelligence Research Lab Challenge.", 
            image: "./images/4.png", // Path to image (you need to provide the image path)
            link: "https://ecommerce-app.com" 
        },
        { 
            title: "Weather Dashboard", 
            description: "Lane Detection System for Autonomous Driving.", 
            image: "./images/5.png", // Path to image (you need to provide the image path)
            link: "https://weather-dashboard.com" 
        },
        { 
            title: "Blog Platform", 
            description: "A platform for users to create and share blog posts.", 
            image: "./images/6.png", // Path to image (you need to provide the image path)
            link: "https://blog-platform.com" 
        },
        { 
            title: "Task Manager", 
            description: "A task management app with to-do list functionality.", 
            image: "./images/7.png", // Path to image (you need to provide the image path)
            link: "https://taskmanager.com" 
        },
        { 
            title: "Chat Application", 
            description: "Real-time chat app with messaging functionality.", 
            image: "./images/8.png", // Path to image (you need to provide the image path)
            link: "https://chatapp.com" 
        }
    ];

    return (
        <Box id="projects" sx={{ padding: 3 }}>
            <Typography 
                variant="h4" 
                sx={{ 
                    marginBottom: 4,
                    marginTop: 0,
                    fontFamily: '"Raleway", serif',
                    textAlign: 'center' // Center align the text
                }}
            >
                Projects
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
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={4} md={4} lg={4} key={index}>
                        <Card
                            sx={{
                                width: '100%',
                                maxWidth: 400,
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    transition: 'transform 0.3s ease',
                                },
                                transition: 'transform 0.3s ease',
                                boxShadow: 3,
                            }}
                        >
                            <CardActionArea href={project.link} target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={project.image}
                                    alt={project.title}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.description}
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

export default Projects;
