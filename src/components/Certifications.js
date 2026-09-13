import React from 'react';
import { Card, CardContent, Typography, Grid, Box, CardMedia, CardActionArea } from '@mui/material';

const certifications = [
    {
        title: "Machine Learning Operations (MLOps) with Vertex AI: Model Evaluation",
        issuedBy: "Google Cloud",
        date: "March 2025",
        image: "./images/mlops.png",
        link: "https://www.cloudskillsboost.google/public_profiles/9a00b57d-4edb-49d1-8ad6-271270c4de4a"
    },
    {
        title: "AWS Certified Developer",
        issuedBy: "Amazon Web Services (AWS)",
        date: "December 2024",
        image: "./images/aws-dva.png",
        link: "https://www.linkedin.com/in/ganeshhgupta/details/certifications/1735708390898/single-media-viewer/?type=IMAGE&profileId=ACoAACvkiwgBVMxRuPJtwOd7r8NoeQvekuEWHgk"
    },
    {
        title: "Full Stack Java Developer",
        issuedBy: "Udemy",
        date: "March 2022",
        image: "./images/spring.png",
        link: "https://www.udemy.com/certificate/UC-3320e3d4-24b1-453f-9baa-8e5e69e56ecd/"
    },
    {
        title: "TensorFlow Developer Certificate",
        issuedBy: "Google",
        date: "March 2022",
        image: "./images/tf-dev.png",
        link: "https://www.udemy.com/certificate/UC-11af7658-2b43-4cd9-b03b-97d1efbbc183/"
    },
    {
        title: "The Complete Node.js Developer Course",
        issuedBy: "Udemy",
        date: "March 2021",
        image: "./images/nodejs.png",
        link: "https://www.udemy.com/certificate/UC-1d6a12c6-5325-4dbe-9e6c-61b45821ce48/"
    },
    {
        title: "MongoDB - The Complete Developer's Guide",
        issuedBy: "Udemy",
        date: "October 2022",
        image: "./images/mongodb.png",
        link: "https://www.udemy.com/certificate/UC-5184f38f-04cc-4a32-9a1d-39f7c08793d6/"
    }
];

const Certifications = () => {
    return (
        <Box id="certifications" sx={{ padding: { xs: 3, sm: 5 } }}>
            <Typography variant="h4" sx={{ marginBottom: 3, textAlign: 'center' }}>
                Certifications
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {certifications.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ width: '100%', maxWidth: 360, height: '100%' }}>
                            <CardActionArea href={item.link} target="_blank" rel="noopener noreferrer" sx={{ height: '100%' }}>
                                <CardMedia component="img" height="150" image={item.image} alt={item.title} />
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontSize: '0.98rem', marginBottom: 1 }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.issuedBy}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.76rem', opacity: 0.85, marginTop: 0.5 }}
                                    >
                                        {item.date}
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
