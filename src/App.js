import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Education from './components/Education';
import About from './components/About';
import Particles from './components/particle';
import CenteredName from './components/CenteredName';

const App = () => {
    const [nightMode, setNightMode] = useState(false);

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
            <Particles />
            <CenteredName toggleNightMode={toggleNightMode} nightMode={nightMode} />
            <Navbar toggleNightMode={toggleNightMode} nightMode={nightMode} />
            <About />
            <Experience />
            <Projects />
            <Research />
            <Education />
        </ThemeProvider>

    );
};

export default App;
