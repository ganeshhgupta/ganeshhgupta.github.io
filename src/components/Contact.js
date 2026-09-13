import React from 'react';
import { Box, Typography } from '@mui/material';
import SectionHeading from './SectionHeading';

const LINKS = [
  { label: 'iamgs10rk@gmail.com', href: 'mailto:iamgs10rk@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ganeshhgupta/' },
  { label: 'GitHub', href: 'https://github.com/ganeshhgupta' },
];

const Contact = () => {
  return (
    <Box id="contact">
      <SectionHeading eyebrow="GET IN TOUCH" title="Contact" />
      <Typography color="text.secondary" sx={{ maxWidth: 560, mb: 3 }}>
        Open to conversations about AI infrastructure, backend systems, and interesting engineering problems.
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3.5 }}>
        {LINKS.map((link) => (
          <Box
            key={link.label}
            component="a"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 600,
              fontSize: '0.92rem',
              color: 'text.primary',
              textDecoration: 'none',
              borderBottom: '1px solid',
              borderColor: 'divider',
              paddingBottom: '2px',
              '&:hover': { color: 'primary.main', borderColor: 'primary.main' },
            }}
          >
            {link.label}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Contact;
