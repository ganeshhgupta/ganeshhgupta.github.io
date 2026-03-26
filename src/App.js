import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Education from './components/Education';
import About from './components/About';
import Particle from './components/particle';
import CenteredName from './components/CenteredName';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App = () => {
    const [nightMode, setNightMode] = useState(false);
    const [startTypingAbout, setStartTypingAbout] = useState(false);

    const theme = createTheme({
        palette: {
            mode: nightMode ? 'dark' : 'light',
            background: { default: nightMode ? '#121212' : '#f5f5f5' },
        },
    });

    const toggleNightMode = () => setNightMode(!nightMode);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Navbar toggleNightMode={toggleNightMode} nightMode={nightMode} />

            <Particle toggleNightMode={toggleNightMode} nightMode={nightMode} />

            <CenteredName
                nightMode={nightMode}
                onReady={() => setStartTypingAbout(true)}
            />

            <Container
                maxWidth="xl"
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    px: { xs: 2, sm: 4, md: 8, lg: 16 },
                }}
            >
                <Box id="about" sx={{ mb: 2 }}>
                    <About
                        nightMode={nightMode}
                        startTyping={startTypingAbout}
                    />
                </Box>

                <Box id="projects" sx={{ mb: 4 }}>
                    <Projects />
                </Box>

                <Box id="skills" sx={{ mb: 4 }}>
                    <Skills nightMode={nightMode} toggleNightMode={toggleNightMode} />
                </Box>

                <Box id="experience" sx={{ mb: 4 }}>
                    <Experience nightMode={nightMode} />
                </Box>

                <Box id="research" sx={{ mb: 4 }}>
                    <Research />
                </Box>

                <Box id="education" sx={{ mb: 4 }}>
                    <Education />
                </Box>

                <Box id="certifications" sx={{ mb: 4 }}>
                    <Certifications />
                </Box>

                <Box id="contact" sx={{ mb: 4 }}>
                    <Contact />
                </Box>
            </Container>

            <Footer nightMode={nightMode} />
        </ThemeProvider>
    );
};

export default App;
