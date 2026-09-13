import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { Timeline, TimelineItem } from '@mui/lab';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Texas at Arlington",
    year: "2023 - 2025",
    highlights: ["Machine Learning", "Neural Networks", "Computer Vision", "Design & Analysis of Algorithms"],
    imageUrl: "/images/uta.png",
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "MCKV Institute of Engineering",
    year: "2016 - 2020",
    highlights: ["Data Structures & Algorithms", "Operating Systems", "Database Management Systems", "Computer Networks"],
    imageUrl: "/images/mckvie.png",
  },
];

const Education = () => {
  return (
    <Box
      id="education"
      sx={{ padding: { xs: 3, sm: 5 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h4" sx={{ marginBottom: 3, textAlign: 'center' }}>
        Education
      </Typography>
      <Timeline position="right" sx={{ maxWidth: { xs: '100%', sm: '820px' }, width: '100%' }}>
        {education.map((edu, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{ display: 'none' }} />
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                <SchoolIcon fontSize="small" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2, display: 'flex', justifyContent: 'center' }}>
              <Card
                sx={{
                  width: { xs: '100%', sm: '720px' },
                  marginBottom: 2,
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { xs: 'flex-start', sm: 'flex-start' },
                  padding: 2.5,
                }}
              >
                <Box
                  sx={{
                    width: { xs: '40px', sm: '46px' },
                    height: { xs: '40px', sm: '46px' },
                    borderRadius: '50%',
                    backgroundImage: `url(${edu.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    flexShrink: 0,
                    marginRight: { xs: 0, sm: 2.5 },
                    marginBottom: { xs: 2, sm: 0 },
                  }}
                />
                <CardContent sx={{ textAlign: 'left', p: '0 !important', flex: 1 }}>
                  <Typography variant="h6" sx={{ marginBottom: 0.5 }}>
                    {edu.degree}
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontSize: '0.92rem', marginBottom: 0.5 }}>
                    {edu.institution}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.76rem', marginBottom: 1.5, opacity: 0.85 }}
                  >
                    {edu.year}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                    {edu.highlights.map((h) => (
                      <Chip
                        key={h}
                        label={h}
                        size="small"
                        variant="outlined"
                        sx={{ fontSize: '0.72rem', borderColor: 'divider', color: 'text.secondary' }}
                      />
                    ))}
                  </Box>
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
