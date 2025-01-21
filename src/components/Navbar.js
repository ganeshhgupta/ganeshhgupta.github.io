import React from 'react';
import { AppBar, Toolbar, Typography, Button, Switch } from '@mui/material';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggleNightMode, nightMode }) => {
    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: nightMode ? '#000000' : 'white', // Explicit hex for black
                color: nightMode ? 'white' : 'black',
                boxShadow: 'none',
                width: '100%', // Ensure it stretches full width
                position: 'relative',
            }}
        >
            <Toolbar>
                {/* Home Link */}
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 'bold' }}
                    onClick={() => scroll.scrollToTop()} // Scrolls to the top
                >
                    Home
                </Typography>

                {/* Section Links */}
                {['Experience', 'Projects', 'Research', 'Education', 'About', 'Skills', 'Contact'].map((section) => (
                    <Link
                        key={section}
                        to={section.toLowerCase()} // Matches section IDs in App.js
                        smooth={true} // Enables smooth scrolling
                        duration={500} // Scrolling duration in ms
                        offset={-70} // Adjust based on navbar height
                    >
                        <Button
                            sx={{
                                color: nightMode ? 'white' : 'black',
                                textTransform: 'capitalize',
                            }}
                        >
                            {section}
                        </Button>
                    </Link>
                ))}

                {/* Night Mode Toggle */}
                <Switch checked={nightMode} onChange={toggleNightMode} />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
