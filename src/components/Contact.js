import React from 'react';
import { Container, Typography, Box, IconButton, Tooltip } from '@mui/material';
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Mail as MailIcon } from '@mui/icons-material';
import { styled } from '@mui/system';
import profilePic from './images/dp.png';

const ProfilePicture = styled('img')({
  borderRadius: '50%',
  width: '104px',
  height: '104px',
  objectFit: 'cover',
  marginBottom: '16px',
});

const Contact = () => {
  return (
    <Container id="contact" sx={{ padding: { xs: '40px 0', sm: '60px 0' } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Contact
        </Typography>

        <ProfilePicture src={profilePic} alt="Ganesh Gupta" />

        <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 2 }}>
          Open to conversations about AI infrastructure, backend systems, and interesting engineering problems.
        </Typography>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Tooltip title="Email" arrow>
            <IconButton href="mailto:iamgs10rk@gmail.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'text.secondary' }}>
              <MailIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn" arrow>
            <IconButton href="https://www.linkedin.com/in/ganeshhgupta/" target="_blank" rel="noopener noreferrer" sx={{ color: 'text.secondary' }}>
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="GitHub" arrow>
            <IconButton href="https://github.com/ganeshhgupta" target="_blank" rel="noopener noreferrer" sx={{ color: 'text.secondary' }}>
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
