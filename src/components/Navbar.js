import React from 'react';
import { AppBar, Toolbar, Typography, Button, Switch } from '@mui/material';
import { Link } from 'react-scroll';

const Navbar = ({ toggleNightMode, nightMode }) => {
    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: nightMode ? 'black' : 'white',
                color: nightMode ? 'white' : 'black',
                boxShadow: 'none',
            }}
        >
            <Toolbar>
                {/* Logo */}
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 'bold' }}
                    onClick={() => window.scrollTo(0, 0)}
                >
                    Home
                </Typography>

                {/* Links */}
                {['Experience', 'Projects', 'Research', 'Education', 'About'].map((section) => (
                    <Button
                        key={section}
                        sx={{ color: nightMode ? 'white' : 'black', textTransform: 'capitalize' }}
                        component={Link}
                        to={section.toLowerCase()}
                        smooth={true}
                        duration={500}
                    >
                        {section}
                    </Button>
                ))}

                {/* Night Mode Toggle */}
                <Typography variant="body2" sx={{ marginRight: 1 }}>
                    Night Mode
                </Typography>
                <Switch checked={nightMode} onChange={toggleNightMode} />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
