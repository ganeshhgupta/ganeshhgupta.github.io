import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Collapse } from '@mui/material';
import { Timeline, TimelineItem } from '@mui/lab';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  const education = [
    { degree: "M.S. in Computer Science", institution: "University of Texas at Arlington", year: "2024", description: "This is where I completed my Master’s degree in Computer Science, focusing on advanced programming, machine learning, and data structures." },
    { degree: "B.Tech in Information Technology", institution: "ABC University", year: "2020", description: "I completed my undergraduate degree in Information Technology with a focus on software development and database management." },
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
                    backgroundImage: `url(/images/university_logo.png)`, // Replace with actual logo
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
                    <Typography
                      variant="body2"
                      sx={{
                        marginTop: 1,
                        overflowWrap: 'break-word',
                        whiteSpace: 'normal',
                      }}
                    >
                      {edu.description}
                    </Typography>
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
