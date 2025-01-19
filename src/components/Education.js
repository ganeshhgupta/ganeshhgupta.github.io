import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Collapse, Grid } from '@mui/material';
import { Timeline, TimelineItem } from '@mui/lab';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Texas at Arlington",
      year: "2024",
      description: [
        "Relevant Coursework",
        [
          "Data Analysis and Modeling Techniques",
          "Design and Analysis of Algorithms",
          "Artificial Intelligence I",
          "Neural Networks",
          "Machine Learning",
          "Computer Vision",
          "Cloud Computing and Big Data",
          "Data Mining",
          "Robotics",
          "Master's Thesis II"
        ]
      ],
      imageUrl: "/images/uta.png", // Replace with the actual image URL for UTA
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "MCKV Institute of Engineering",
      year: "2020",
      description: [
        "Relevant Coursework",
        [
          "Data Structures and Algorithms",
"Computer Organization",
"Operating System",
"Discrete Mathematics",
"Object Oriented Programming",
"Design and Analysis of Algorithms",
"Database Management System",
"Computer Networks",
"Software Engineering",
"Compiler Design",
"Artificial Intelligence",
"Cryptography and Network Security",
"Cloud Computing",
"Internet Technology",
"Computer Graphics",
"E-Commerce",
"Industrial Training",
        ]
      ],
      imageUrl: "/images/mckvie.png", // Replace with the actual image URL for ABC University
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <Box
      id="education"
      sx={{
        padding: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 4, // Adds space between sections
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: 2,
          textAlign: 'center',
          fontFamily: '"Raleway", serif',  // Applying Raleway font
        }}
      >
        Education
      </Typography>
      <Timeline position="right" sx={{ maxWidth: '800px', width: '100%' }}>
        {education.map((edu, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{
                display: 'none', // Hides the opposite content
              }}
            />
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="secondary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                py: '12px',
                px: 2,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Card
                sx={{
                  width: '700px',
                  marginBottom: 2,
                  transition: 'transform 0.3s ease-in-out, height 0.3s ease-in-out',
                  transform: hoverIndex === index ? 'scale(1.05)' : 'scale(1)',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  backgroundColor: hoverIndex === index ? 'grey.200' : 'grey.100',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  minHeight: '150px',
                  height: hoverIndex === index ? 'auto' : '120px',
                  padding: 2,
                }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <Box
                  sx={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundImage: `url(${edu.imageUrl})`, // Use the specific image for each entry
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    marginRight: 2,
                  }}
                />
                <CardContent
                  sx={{
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    height: '100%',
                    overflow: 'hidden',
                    flex: 1,
                  }}
                >
                  <Typography variant="h6" sx={{ marginBottom: 1 }}>
                    {edu.degree}
                  </Typography>
                  <Typography color="text.secondary" sx={{ marginBottom: 1 }}>
                    {edu.institution}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                    {edu.year}
                  </Typography>
                  <Collapse in={hoverIndex === index}>
                    <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 1, fontSize: '1rem' }}>
                      {edu.description[0]} {/* "Relevant Coursework" heading */}
                    </Typography>
                    <Grid container spacing={2}>
                      {edu.description[1].map((course, courseIndex) => (
                        <Grid item xs={4} key={courseIndex}>
                          <ul style={{ fontSize: '0.9rem', paddingLeft: '20px' }}>
                            <li style={{ fontSize: '0.9rem' }}>{course}</li>
                          </ul>
                        </Grid>
                      ))}
                    </Grid>
                  </Collapse>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Education;
