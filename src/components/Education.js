import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import SectionHeading from './SectionHeading';

const education = [
  {
    degree: "M.S., Computer Science",
    institution: "University of Texas at Arlington",
    year: "2023 - 2025",
    highlights: ["Machine Learning", "Neural Networks", "Computer Vision", "Design & Analysis of Algorithms"],
  },
  {
    degree: "B.Tech, Computer Science and Engineering",
    institution: "MCKV Institute of Engineering",
    year: "2016 - 2020",
    highlights: ["Data Structures & Algorithms", "Operating Systems", "Database Management Systems", "Computer Networks"],
  },
];

const Education = () => {
  return (
    <Box id="education">
      <SectionHeading eyebrow="ACADEMIC BACKGROUND" title="Education" />
      <Box>
        {education.map((edu, index) => (
          <Box
            key={index}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '160px 1fr' },
              gap: { xs: 1, sm: 4 },
              py: 4,
              borderTop: index === 0 ? 'none' : '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography
              sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.76rem', color: 'text.secondary' }}
            >
              {edu.year}
            </Typography>
            <Box>
              <Typography variant="h6" sx={{ mb: 0.25 }}>
                {edu.degree}
              </Typography>
              <Typography color="primary.main" sx={{ fontSize: '0.92rem', fontWeight: 500, mb: 1.5 }}>
                {edu.institution}
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
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Education;
