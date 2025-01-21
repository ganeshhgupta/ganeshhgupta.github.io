import React from 'react';
import { Card, CardContent, Typography, Grid, Box, CardMedia, CardActionArea } from '@mui/material';

const Certifications = () => {
    const certifications = [
        { 
            title: "AWS Certified Developer", 
            issuedBy: "Amazon Web Services (AWS)", 
            date: "December 2024", 
            image: "./images/aws-dva.png" // Path to image (you need to provide the image)
        },
        { 
            title: "Full Stack Java developer - Java + JSP + Restful WS + Spring", 
            issuedBy: "Udemy", 
            date: "March 2022", 
            image: "./images/spring.png" // Path to image (you need to provide the image)
        },
        { 
            title: "TensorFlow Developer Certificate", 
            issuedBy: "Google", 
            date: "March 2022", 
            image: "./images/tf-dev.png" // Path to image (you need to provide the image)
        },
        { 
            title: "The Complete Node.js Developer Course", 
            issuedBy: "Udemy", 
            date: "March 2021", 
            image: "./images/nodejs.png" // Path to image (you need to provide the image)
        },
        { 
            title: "MongoDB - The Complete Developer's Guide", 
            issuedBy: "Udemy", 
            date: "October 2022", 
            image: "./images/mongodb.png" // Path to image (you need to provide the image)
        },
        { 
            title: "CompTIA Security+", 
            issuedBy: "CompTIA", 
            date: "June 2020", 
            image: "./images/comptia.png" // Path to image (you need to provide the image)
        }
    ];

    return (
        <Box id="certifications" sx={{ padding: 3 }}>
            <Typography variant="h4" sx={{ 
                marginBottom: 4, 
                marginTop: 4, // Add margin-top to create space between sections
                fontFamily: '"Raleway", serif',
                textAlign: 'center' // Center align the text
            }}>
                Certifications
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
                {certifications.map((item, index) => (
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
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="180" // Adjusted height for a taller photo
                                    image={item.image} // Image path
                                    alt={item.title}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Issued by: {item.issuedBy}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Date: {item.date}
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

export default Certifications;
