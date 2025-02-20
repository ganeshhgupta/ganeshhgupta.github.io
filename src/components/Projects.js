import React from 'react';
import { Card, CardContent, Typography, Grid, Box, CardMedia, CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        { 
            title: "Low Latency Motion Tracking using Vision Transformer : Thesis", 
            description: "Vision Transformers have revolutionized the field of computer vision by applying the self-attention mechanism to image recognition tasks. This project aims to enhance ViT's performance by incorporating HOG features, which are known for their ability to capture shape and appearance information through gradient distributions.", 
            image: "./images/1.png", 
            link: "https://github.com/ganeshhgupta/HoG-ViT" 
        },
        { 
            title: "YouTube Video Querying Assistant : RAG, Langchain, Pinecone", 
            description: "Developed an interactive YouTube video query system using LangChain, leveraging OpenAI Embeddings to process video transcripts stored in a vector database. Improved search functionality with recursive querying and robust error handling for more accurate and efficient results.", 
            image: "./images/yt-query.png", 
            link: "https://github.com/ganeshhgupta/HoG-ViT" 
        },
        { 
            title: "Community Detection in Social Networks : Big Data", 
            description: "Architected a Map-Reduce program to partition a directed graph into K clusters using multi-source BFS, optimizing proximity-based grouping through iterative propagation. Utilized Apache Spark SQL and RDDs to calculate neighbors and efficiently group nodes." ,
            image: "./images/2.png", 
            link: "https://github.com/ganeshhgupta/CCBD" 
        },
        { 
            title: "Caltech 256 Object Classifier : ResNet50 : UTA Datathon ", 
            description: "This project built an image classifier using PyTorch and transfer learning with a pre-trained ResNet50 model. Key techniques included data augmentation to expand dataset diversity, layer fine-tuning for task adaptation, and regularization to prevent overfitting. Few-shot learning was also implemented to improve classification performance for classes with limited data.",
            image: "./images/3.png", 
            link: "https://portfolio.com" 
        },
        { 
            title: "Twitter Sentiment Analysis using BERT : Innovative Data Intelligence Research Lab Challenge ", 
            description: "This project uses the BERT model to analyze and classify sentiment in Twitter data. By fine-tuning BERT for natural language understanding, the system accurately detects positive, negative, or neutral sentiments, even in tweets with slang or informal language. Trained on a large labeled dataset, the model ensures high accuracy and is designed to scale, processing real-time Twitter data for sentiment trends and public opinion analysis.",
            image: "./images/4.png", 
            link: "https://github.com/ganeshhgupta/Twitter-Sentiment-Analysis" 
        },
        { 
            title: "Lane Detection System for Autonomous Driving : UNet, Yolo Panoptic", 
            description: "This project enhances lane detection in challenging conditions like low light and poor weather using UNet for semantic segmentation and Yolo Panoptic for object detection. The system accurately identifies lane markings, ensuring safer navigation in fog, rain, or nighttime driving with real-time processing and improved reliability.",
            image: "./images/5.png", 
            link: "https://weather-dashboard.com" 
        },
            { 
                title: "Emotion Detection using Haar Cascades Classifier : OpenCV", 
                description: "This project uses Haar Cascades to detect emotions from facial expressions in real-time, identifying emotions like happiness, sadness, and anger. It’s suitable for applications like user experience monitoring and emotion-based AI interactions.", 
                image: "./images/6.png", 
                link: "https://blog-platform.com" 
            },
            { 
                title: "Bitcoin Price Prediction : LSTM, 1D-CNN, N-Beats", 
                description: "This project predicts Bitcoin prices using models like LSTM, 1D-CNN, and N-BEATS, analyzing historical price data and factors like trading volume and market sentiment for accurate short-term predictions.", 
                image: "./images/7.png", 
                link: "https://taskmanager.com" 
            },
            { 
                title: "Employee Management Dashboard : Java, Spring, SQL", 
                description: "A web-based portal for managing employee data with secure login and full CRUD operations. Built with Java, Spring, and SQL, it enhances operational efficiency and boosts user engagement by 25%.", 
                image: "./images/8.png", 
                link: "https://chatapp.com" 
            },
            {
                title: "Facebook vs Google AdWords A/B Testing and Conversion Analysis",
                description: "Conducted data cleaning and analyzed click-to-conversion ratios, segmented data, and performed correlation, regression, and A/B testing with interactive visualizations to determine the more effective marketing platform.",
                image: "./images/ab_test.png",
                link: "https://github.com/ganeshhgupta/Facebook_vs_Adwords_AB_Testing"
            },
            {
                title: "ETL (Extract-Transform-Load) Pipeline for Amazon Books : Apache Airflow",
                description: "Developed an Apache Airflow DAG to extract, transform, and load book data from Amazon into PostgreSQL, ensuring efficient data structuring and automation.",
                image: "./images/etl.png",
                link: "https://github.com/ganeshhgupta/Amazon-Books-ETL"
            }
                        
        
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Starts invisible and slightly below
            animate={{ opacity: 1, y: 0 }} // Fades in and moves up
            transition={{ duration: 1.5, delay: 3, ease: "easeOut" }} // 3-sec delay before appearing
        >
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
                                            maxHeight: 90, // Collapsed height
                                            '&:hover': {
                                                maxHeight: 360, // Expanded height
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
        </motion.div>
    );
    
};

export default Projects;
