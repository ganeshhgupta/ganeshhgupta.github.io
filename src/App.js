import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Education from './components/Education';
import About from './components/About';
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
            h1: { fontFamily: '"Raleway", sans-serif', fontWeight: 700, letterSpacing: '-0.01em' },
            h2: { fontFamily: '"Raleway", sans-serif', fontWeight: 600, letterSpacing: '-0.01em' },
            h3: { fontFamily: '"Raleway", sans-serif', fontWeight: 600 },
            h4: { fontFamily: '"Raleway", sans-serif', fontWeight: 600, fontSize: '1.6rem' },
            h5: { fontFamily: '"Raleway", sans-serif', fontWeight: 600, fontSize: '1.15rem' },
            h6: { fontFamily: '"Raleway", sans-serif', fontWeight: 600, fontSize: '1.02rem' },
            body1: { fontSize: '1rem', lineHeight: 1.7 },
            body2: { fontSize: '0.9rem', lineHeight: 1.65 },
            button: { textTransform: 'none', fontWeight: 600 },
            overline: { fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.08em', fontSize: '0.72rem' },
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
    const [nightMode, setNightMode] = useState(true);

    const theme = getTheme(nightMode);

    const toggleNightMode = () => setNightMode(!nightMode);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Navbar toggleNightMode={toggleNightMode} nightMode={nightMode} />

            <Container
                maxWidth="md"
                sx={{
                    px: { xs: 2.5, sm: 4 },
                    pt: '64px', // clears the fixed navbar
                }}
            >
                <About />

                <Box sx={{ mb: 9 }}><Projects /></Box>
                <Box sx={{ mb: 9 }}><Skills /></Box>
                <Box sx={{ mb: 9 }}><Experience /></Box>
                <Box sx={{ mb: 9 }}><Research /></Box>
                <Box sx={{ mb: 9 }}><Education /></Box>
                <Box sx={{ mb: 9 }}><Certifications /></Box>
                <Box sx={{ mb: 6 }}><Contact /></Box>
            </Container>

            <Footer />
        </ThemeProvider>
    );
};

export default App;
