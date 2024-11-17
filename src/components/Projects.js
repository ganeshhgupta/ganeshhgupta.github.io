import React from 'react';
import { Card, CardContent, Typography, Grid, Box, CardMedia, CardActionArea } from '@mui/material';

const Projects = () => {
    const projects = [
        { 
            title: "Portfolio Website", 
            description: "A React-based portfolio showcasing my work.", 
            image: "1.png", // Path to image (you need to provide the image path)
            link: "http://localhost:3001/" 
        },
        { 
            title: "Portfolio Website", 
            description: "A React-based portfolio showcasing my work.", 
            image: "/images/portfolio.png", // Path to image (you need to provide the image path)
            link: "https://portfolio.com" 
        },
        { 
            title: "Portfolio Website", 
            description: "A React-based portfolio showcasing my work.", 
            image: "/images/portfolio.png", // Path to image (you need to provide the image path)
            link: "https://portfolio.com" 
        },
        { 
            title: "E-commerce App", 
            description: "A full-stack MERN application for online shopping.", 
            image: "/images/ecommerce.png", // Path to image
            link: "https://ecommerce-app.com" 
        },
        { 
            title: "Weather Dashboard", 
            description: "A web app to check weather updates globally.", 
            image: "/images/weather.png", // Path to image
            link: "https://weather-dashboard.com" 
        },
        { 
            title: "Blog Platform", 
            description: "A platform for users to create and share blog posts.", 
            image: "/images/blog.png", // Path to image
            link: "https://blog-platform.com" 
        },
        { 
            title: "Task Manager", 
            description: "A task management app with to-do list functionality.", 
            image: "/images/taskmanager.png", // Path to image
            link: "https://taskmanager.com" 
        },
        { 
            title: "Chat Application", 
            description: "Real-time chat app with messaging functionality.", 
            image: "/images/chatapp.png", // Path to image
            link: "https://chatapp.com" 
        }
    ];

    return (
        <Box id="projects" sx={{ padding: 3 }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Projects
            </Typography>
            <Grid 
                container 
                spacing={3} 
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
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
                            <CardActionArea href={project.link} target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={project.image} // Image path
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
