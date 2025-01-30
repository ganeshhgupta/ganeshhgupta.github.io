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
            title: "Community Detection in Social Networks : Big Data", 
            description: "Architected a Map-Reduce program to partition a directed graph into K clusters using multi-source BFS, optimizing proximity-based grouping through iterative propagation. Utilized RDDs in Apache Spark SQL to calculate neighbors and group the nodes accordingly.", 
            image: "./images/2.png", 
            link: "https://github.com/ganeshhgupta/CCBD" 
        },
        { 
            title: "Caltech 256 Object Classifier : ResNet50 : UTA Datathon ", 
            description: "This project developed an image classifier using PyTorch and transfer learning with a pre-trained ResNet50 model. Key techniques implemented include data augmentation to enhance dataset diversity, layer fine-tuning to adapt the pre-trained model to the specific task, and regularization methods to prevent overfitting. Additionally, few-shot learning was employed to improve performance for classes with limited data, enabling effective classification even in scenarios with scarce labeled examples.", 
            image: "./images/3.png", 
            link: "https://portfolio.com" 
        },
        { 
            title: "Twitter Sentiment Analysis using BERT : Innovative Data Intelligence Research Lab Challenge ", 
            description: "This project leverages the BERT (Bidirectional Encoder Representations from Transformers) model to analyze and classify sentiment in Twitter data. By fine-tuning BERT for natural language understanding, the system is capable of accurately detecting positive, negative, or neutral sentiments in tweets, even those with slang, abbreviations, or informal language. The model is trained on a large corpus of labeled data to ensure high accuracy and is designed to scale, processing large volumes of real-time Twitter data for sentiment trends and public opinion analysis.", 
            image: "./images/4.png", 
            link: "https://github.com/ganeshhgupta/Twitter-Sentiment-Analysis" 
        },
        { 
            title: "Lane Detection System for Autonomous Driving : UNet, Yolo Panoptic", 
            description: "This project focuses on improving lane detection capabilities in challenging driving conditions such as low light and poor weather. By leveraging advanced models like UNet for semantic segmentation and Yolo Panoptic for object detection, the system can more accurately identify and track lane markings, ensuring safer navigation in environments with limited visibility, such as fog, rain, or nighttime driving. The combination of these models allows for real-time processing and higher reliability under adverse conditions.", 
            image: "./images/5.png", 
            link: "https://weather-dashboard.com" 
        },
        { 
            title: "Emotion Detection using Haar Cascades Classifier : OpenCV", 
            description: "This project involves the use of Haar Cascades, a machine learning-based approach, to detect human emotions from facial expressions in real-time. By training the classifier on various labeled emotion datasets, the system can identify emotions such as happiness, sadness, anger, surprise, and fear through facial feature analysis. Haar Cascades are applied for efficient and rapid feature detection, making the system suitable for use in applications such as user experience monitoring, mental health assessment, or emotion-based interactions in AI systems.", 
            image: "./images/6.png", 
            link: "https://blog-platform.com" 
        },
        { 
            title: "Bitcoin Price Prediction : LSTM, 1D-CNN, N-Beats", 
            description: " This project focuses on predicting Bitcoin prices by transforming historical price data into a time series forecasting problem. Multiple models were developed, including Fully-Connected Networks, Long Short-Term Memory (LSTM), 1D Convolutional Neural Networks (CNN), and N-BEATS, to capture complex patterns in the data. Using TensorFlow’s layer subclassing, the models were optimized for multivariate analysis, taking into account factors like trading volume, market sentiment, and past price trends. The goal is to provide accurate short-term price predictions and better insights for investors in the volatile cryptocurrency market.", 
            image: "./images/7.png", 
            link: "https://taskmanager.com" 
        },
        { 
            title: "Employee Management Dashboard : Java, Spring, SQL", 
            description: "This project involved the creation of a web-based portal for efficient employee data management, designed with Figma for an intuitive user interface. The backend was built using J2EE, Spring MVC, JDBC, and SQL, enabling secure login and full CRUD (Create, Read, Update, Delete) operations on employee data. By integrating real-time data updates and a user-friendly, interactive design, the dashboard boosted user engagement by 25%. It provides managers with accurate insights into employee information, streamlining processes and improving overall operational efficiency.", 
            image: "./images/8.png", 
            link: "https://chatapp.com" 
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
