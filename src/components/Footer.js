import React from 'react';
import { Container, Typography, Box, IconButton, Tooltip } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        padding: '24px 0',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <Container>
        <Tooltip title="Scroll to the top" arrow>
          <IconButton
            onClick={scrollToTop}
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              color: 'text.secondary',
              marginBottom: 1.5,
              '&:hover': { color: 'primary.main', borderColor: 'primary.main' },
            }}
          >
            <ArrowUpwardIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Typography variant="body2" color="text.secondary">
          © {currentYear} Ganesh Gupta. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
