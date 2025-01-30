import React from 'react';
import { Container, Typography, Box, IconButton, Card, CardContent, Tooltip } from '@mui/material';
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Mail as MailIcon } from '@mui/icons-material';
import { styled } from '@mui/system';
import profilePic from './images/dp.png';

const ProfilePicture = styled('img')({
  borderRadius: '50%',
  width: '120px',
  height: '120px',
  objectFit: 'cover',
  marginBottom: '10px',
});

const Contact = () => {
  return (
    <Container id="contact" sx={{ padding: '60px 0' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: 600,
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" sx={{ 
                        marginTop: 0, // Add margin-top to create space between sections
                        fontFamily: '"Raleway", serif',
                        textAlign: 'center' // Center align the text
                    }}>
          Contact
        </Typography>

        <Box sx={{
          width: '50px',
          height: '2px', 
          backgroundColor: 'black',
          margin: '8px auto',
          marginBottom: '25px',
        }} />

        <ProfilePicture src={profilePic} alt="Profile Picture" />

        <Box sx={{ width: '100%', mt: 2 }}>
          <Card>
            <CardContent>
              <Typography variant="body1" sx={{ 
                        marginTop: 0, // Add margin-top to create space between sections
                        fontFamily: '"Raleway", serif',
                        textAlign: 'center' // Center align the text
                    }}>
                Feel free to reach out for collaborations or questions about my work. <br/> Let’s build something amazing together.
              </Typography>
              <Box alignItems="center" sx={{ display: 'flex', gap: 2, marginTop: '10px', alignItems: 'center', justifyContent: 'center' }}>
                <Tooltip title="Email" arrow>
                  <IconButton
                    href="mailto:iamgs10rk@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'black' }}
                  >
                    <MailIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="LinkedIn" arrow>
                  <IconButton
                    href="https://www.linkedin.com/in/ganeshhgupta/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#0077b5' }}
                  >
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Github" arrow>
                  <IconButton
                    href="https://github.com/ganeshhgupta"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'black' }}
                  >
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
