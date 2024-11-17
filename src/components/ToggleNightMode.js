import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Section from './components/Section';

const App = () => {
    const [nightMode, setNightMode] = useState(false);

    // Theme setup
    const theme = createTheme({
        palette: {
            mode: nightMode ? 'dark' : 'light',
        },
    });

    const toggleNightMode = () => {
        setNightMode(!nightMode);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar toggleNightMode={toggleNightMode} nightMode={nightMode} />
            <Section id="experience" title="Experience">
                <p>Your professional experience goes here.</p>
            </Section>
            <Section id="projects" title="Projects">
                <p>Your projects go here.</p>
            </Section>
            <Section id="research" title="Research">
                <p>Your research activities go here.</p>
            </Section>
            <Section id="education" title="Education">
                <p>Your educational background goes here.</p>
            </Section>
            <Section id="about" title="About">
                <p>About yourself goes here.</p>
            </Section>
        </ThemeProvider>
    );
};

export default App;
