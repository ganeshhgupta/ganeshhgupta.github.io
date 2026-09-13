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

// ─── Design tokens ───────────────────────────────────────────────────────────
// One neutral ink/paper pair plus a single considered accent (deep indigo).
// Everything else in the app should read these tokens rather than picking
// its own ad hoc colors.
const ACCENT = '#3454D1';
const ACCENT_DARK = '#7C93F0';

const getTheme = (nightMode) =>
    createTheme({
        palette: {
            mode: nightMode ? 'dark' : 'light',
            primary: { main: nightMode ? ACCENT_DARK : ACCENT },
            background: {
                default: nightMode ? '#0B0D12' : '#FAFAF8',
                paper: nightMode ? '#14171F' : '#FFFFFF',
            },
            text: {
                primary: nightMode ? '#EDEEF2' : '#14171F',
                secondary: nightMode ? '#9AA0AC' : '#565B66',
            },
            divider: nightMode ? 'rgba(255,255,255,0.09)' : 'rgba(20,23,31,0.09)',
        },
        shape: { borderRadius: 10 },
        typography: {
            fontFamily: '"Inter", -apple-system, "Segoe UI", sans-serif',
            h1: { fontFamily: '"Raleway", sans-serif', fontWeight: 600, letterSpacing: '-0.01em' },
            h2: { fontFamily: '"Raleway", sans-serif', fontWeight: 600, letterSpacing: '-0.01em' },
            h3: { fontFamily: '"Raleway", sans-serif', fontWeight: 600 },
            h4: { fontFamily: '"Raleway", sans-serif', fontWeight: 600, fontSize: '1.7rem', letterSpacing: '0.01em' },
            h5: { fontFamily: '"Raleway", sans-serif', fontWeight: 600, fontSize: '1.15rem' },
            h6: { fontFamily: '"Raleway", sans-serif', fontWeight: 600, fontSize: '1.02rem' },
            body1: { fontSize: '1rem', lineHeight: 1.7 },
            body2: { fontSize: '0.9rem', lineHeight: 1.65 },
            button: { textTransform: 'none', fontWeight: 600 },
            overline: { fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.08em' },
        },
        components: {
            MuiCard: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        backgroundImage: 'none',
                        border: `1px solid ${theme.palette.divider}`,
                        boxShadow: 'none',
                    }),
                },
            },
            MuiButton: {
                styleOverrides: { root: { borderRadius: 8 } },
            },
            MuiChip: {
                styleOverrides: { root: { borderRadius: 6 } },
            },
        },
    });

const App = () => {
    const [nightMode, setNightMode] = useState(false);

    const theme = getTheme(nightMode);

    const toggleNightMode = () => setNightMode(!nightMode);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Navbar toggleNightMode={toggleNightMode} nightMode={nightMode} />

            <Particle nightMode={nightMode} />

            <CenteredName nightMode={nightMode} />

            <Container
                maxWidth="xl"
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    px: { xs: 2, sm: 4, md: 8, lg: 16 },
                }}
            >
                <Box id="about" sx={{ mb: 2 }}>
                    <About nightMode={nightMode} />
                </Box>

                <Box id="projects" sx={{ mb: 4 }}>
                    <Projects />
                </Box>

                <Box id="skills" sx={{ mb: 4 }}>
                    <Skills nightMode={nightMode} />
                </Box>

                <Box id="experience" sx={{ mb: 4 }}>
                    <Experience nightMode={nightMode} />
                </Box>

                <Box id="research" sx={{ mb: 4 }}>
                    <Research />
                </Box>

                <Box id="education" sx={{ mb: 4 }}>
                    <Education nightMode={nightMode} />
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
