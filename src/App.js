import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, useMediaQuery } from '@mui/material';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Education from './components/Education';
import About from './components/About';
import Particle from './components/Particle';
import CenteredName from './components/CenteredName';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App = () => {
    const [nightMode, setNightMode] = useState(false); // Handles theme mode
    const [startTypingAbout, setStartTypingAbout] = useState(false); // Triggers the typing effect for About
    const isSmallScreen = useMediaQuery('(max-width:600px)'); // Responsive check for smaller screens

    // Define MUI theme based on the night mode state
    const theme = createTheme({
        palette: {
            mode: nightMode ? 'dark' : 'light',
            background: { default: nightMode ? '#121212' : '#f5f5f5' },
        },
    });

    const toggleNightMode = () => setNightMode(!nightMode); // Toggles between light and dark mode

    useEffect(() => {
        // Triggers typing animation in About section after a delay
        const timer = setTimeout(() => setStartTypingAbout(true), 3000); // 3 seconds delay
        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline /> {/* Normalizes styles for consistent cross-browser appearance */}
            
            {/* Navbar with Night Mode Toggle */}
            <Navbar 
                toggleNightMode={toggleNightMode} 
                nightMode={nightMode} 
                isSmallScreen={isSmallScreen} 
            />
            
            {/* Particle Background */}
            <Particle 
                toggleNightMode={toggleNightMode} 
                nightMode={nightMode} 
                isSmallScreen={isSmallScreen} 
            />
            
            {/* Centered Name Section */}
            <CenteredName 
                toggleNightMode={toggleNightMode} 
                nightMode={nightMode} 
                isSmallScreen={isSmallScreen} 
            />

            {/* Main Content Sections */}
            <Box
                sx={{
                    marginX: isSmallScreen ? '16px' : '250px',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <Box id="about" sx={{ marginBottom: '32px' }}>
                    <About
                        toggleNightMode={toggleNightMode}
                        nightMode={nightMode}
                        startTyping={startTypingAbout}
                        isSmallScreen={isSmallScreen}
                    />
                </Box>

                <Box id="projects" sx={{ marginBottom: '32px' }}>
                    <Projects isSmallScreen={isSmallScreen} />
                </Box>

                <Box id="skills" sx={{ marginBottom: '32px' }}>
                    <Skills isSmallScreen={isSmallScreen} />
                </Box>
            </Box>

            {/* Secondary Content Sections */}
            <Box
                sx={{
                    marginX: isSmallScreen ? '16px' : '250px',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <Box id="experience" sx={{ marginBottom: '32px' }}>
                    <Experience isSmallScreen={isSmallScreen} />
                </Box>

                <Box id="research" sx={{ marginBottom: '32px' }}>
                    <Research isSmallScreen={isSmallScreen} />
                </Box>

                <Box id="education" sx={{ marginBottom: '32px' }}>
                    <Education isSmallScreen={isSmallScreen} />
                </Box>

                <Certifications isSmallScreen={isSmallScreen} />

                <Box id="contact" sx={{ marginBottom: '32px' }}>
                    <Contact isSmallScreen={isSmallScreen} />
                </Box>
            </Box>

            {/* Footer */}
            <Footer isSmallScreen={isSmallScreen} />
        </ThemeProvider>
    );
};

export default App;
