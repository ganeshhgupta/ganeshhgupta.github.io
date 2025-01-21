import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
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
    const [nightMode, setNightMode] = useState(false);
    const [startTypingAbout, setStartTypingAbout] = useState(false);  // Added state

    const theme = createTheme({
        palette: {
            mode: nightMode ? 'dark' : 'light',
            background: { default: nightMode ? '#121212' : '#f5f5f5' },
        },
    });

    const toggleNightMode = () => setNightMode(!nightMode);

    // Trigger typing effect for About section after 2 seconds
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setStartTypingAbout(true);
        }, 3000);  // 2 seconds delay
        return () => clearTimeout(timer);  // Cleanup timeout
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar toggleNightMode={toggleNightMode} nightMode={nightMode} />
            <Particle toggleNightMode={toggleNightMode} nightMode={nightMode} />
            <CenteredName toggleNightMode={toggleNightMode} nightMode={nightMode} />

            {/* Section Containers with IDs for scrolling */}
            <Box sx={{ marginLeft: '250px', marginRight: '300px', position: 'relative', zIndex: 1 }}>
                <Box id="about">
                    <About 
                        toggleNightMode={toggleNightMode} 
                        nightMode={nightMode} 
                        startTyping={startTypingAbout}  // Pass the state as prop
                    />
                </Box>
                <Box id="projects">
                    <Projects />
                </Box>
                <Box id="skills">
                    <Skills />
                </Box>
            </Box>

            <Box sx={{ marginLeft: '250px', marginRight: '250px', position: 'relative', zIndex: 1 }}>
                <Box id="experience">
                    <Experience />
                </Box>
                <Box id="research">
                    <Research />
                </Box>
                <Box id="education">
                    <Education />
                </Box>
                <Certifications />
                <Box id="contact">
                    <Contact />
                </Box>
            </Box>
            <Footer />
        </ThemeProvider>
    );
};

export default App;
