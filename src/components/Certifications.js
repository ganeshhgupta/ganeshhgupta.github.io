import React from 'react';
import { Card, CardContent, Typography, Grid, Box, CardMedia, CardActionArea } from '@mui/material';

const Certifications = () => {
    const certifications = [
        { 
            title: "AWS Certified Developer", 
            issuedBy: "Amazon Web Services (AWS)", 
            date: "December 2024", 
            image: "./images/aws-dva.png", // Path to image (you need to provide the image)
            link: "https://www.linkedin.com/in/ganeshhgupta/details/certifications/1735708390898/single-media-viewer/?type=IMAGE&profileId=ACoAACvkiwgBVMxRuPJtwOd7r8NoeQvekuEWHgk"
        },
        { 
            title: "Full Stack Java developer - Java + JSP + Restful WS + Spring", 
            issuedBy: "Udemy", 
            date: "March 2022", 
            image: "./images/spring.png", // Path to image (you need to provide the image)
            link: "https://www.udemy.com/certificate/UC-3320e3d4-24b1-453f-9baa-8e5e69e56ecd/"
        },
        { 
            title: "TensorFlow Developer Certificate", 
            issuedBy: "Google", 
            date: "March 2022", 
            image: "./images/tf-dev.png", // Path to image (you need to provide the image)
            link: "https://www.udemy.com/certificate/UC-11af7658-2b43-4cd9-b03b-97d1efbbc183/"
        },
        { 
            title: "The Complete Node.js Developer Course", 
            issuedBy: "Udemy", 
            date: "March 2021", 
            image: "./images/nodejs.png", // Path to image (you need to provide the image)
            link: "https://www.udemy.com/certificate/UC-1d6a12c6-5325-4dbe-9e6c-61b45821ce48/"
        },
        { 
            title: "MongoDB - The Complete Developer's Guide", 
            issuedBy: "Udemy", 
            date: "October 2022", 
            image: "./images/mongodb.png", // Path to image (you need to provide the image)
            link: "https://www.udemy.com/certificate/UC-5184f38f-04cc-4a32-9a1d-39f7c08793d6/"
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
                            <CardActionArea href={item.link} target="_blank" rel="noopener noreferrer">
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
