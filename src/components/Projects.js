import React from 'react';
import { Card, CardContent, Typography, Grid, Box, CardMedia, CardActionArea } from '@mui/material';

const Projects = () => {
    const projects = [
        { 
            title: "Low Latency Motion Tracking using Vision Transformer", 
            description: "A React-based portfolio showcasing my work.", 
            image: "./images/1.png", 
            link: "http://localhost:3001/" 
        },
        { 
            title: "Community Detection in Social Networks", 
            description: "Architected a Map-Reduce program to partition a directed graph into K clusters using multi-source BFS, optimizing proximity-based grouping through iterative propagation. Utilized RDDs in Apache Spark SQL to calculate neighbors and group the nodes accordingly.", 
            image: "./images/2.png", 
            link: "https://github.com/ganeshhgupta/CCBD" 
        },
        { 
            title: "Caltech 256 Object Classifier", 
            description: "A React-based portfolio showcasing my work.", 
            image: "./images/3.png", 
            link: "https://portfolio.com" 
        },
        { 
            title: "Innovative Data Intelligence Research Lab Challenge", 
            description: "Innovative Data Intelligence Research Lab Challenge.", 
            image: "./images/4.png", 
            link: "https://ecommerce-app.com" 
        },
        { 
            title: "Weather Dashboard", 
            description: "Lane Detection System for Autonomous Driving.", 
            image: "./images/5.png", 
            link: "https://weather-dashboard.com" 
        },
        { 
            title: "Blog Platform", 
            description: "A platform for users to create and share blog posts.", 
            image: "./images/6.png", 
            link: "https://blog-platform.com" 
        },
        { 
            title: "Task Manager", 
            description: "A task management app with to-do list functionality.", 
            image: "./images/7.png", 
            link: "https://taskmanager.com" 
        },
        { 
            title: "Chat Application", 
            description: "Real-time chat app with messaging functionality.", 
            image: "./images/8.png", 
            link: "https://chatapp.com" 
        }
    ];

    return (
        <Box id="projects" sx={{ padding: 3 }}>
            <Typography 
                variant="h4" 
                sx={{ 
                    marginBottom: 4,
                    fontFamily: '"Raleway", serif',
                    textAlign: 'center'
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
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        '&:hover': {
            transform: 'scale(1.02)',
            height: 'auto',
        },
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
        <CardContent
            sx={{
                transition: 'max-height 0.3s ease',
                maxHeight: 80, // Collapsed height
                '&:hover': {
                    maxHeight: 150, // Expanded height
                },
            }}
        >
            <Typography variant="h6" component="div">
                {project.title}
            </Typography>
            <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{
                    marginTop: 1, // Adds spacing between the title and description
                }}
            >
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
