import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Switch,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import { Link, animateScroll as scroll } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home'; // Import HomeIcon
import { useMediaQuery } from '@mui/material';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [nightMode, setNightMode] = useState(false); // Local state for night mode
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    let lastScrollY = 0;

    // Load night mode state from localStorage on component mount
    useEffect(() => {
        const savedNightMode = localStorage.getItem('nightMode') === 'true';
        setNightMode(savedNightMode);
    }, []);

    // Save night mode state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('nightMode', nightMode);
    }, [nightMode]);

    const toggleDrawer = (open) => {
        setDrawerOpen(open);
    };

    const handleScroll = () => {
        if (window.scrollY < lastScrollY) {
            setShowNavbar(true);
        } else {
            setShowNavbar(false);
        }
        lastScrollY = window.scrollY;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const renderLinks = () => (
        ['Projects', 'Skills', 'Experience', 'Research', 'Education', 'Certifications', 'Contact'].map((section) => (
            <Link
                key={section}
                to={section.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
            >
                <Button
                    sx={{
                        color: nightMode ? 'white' : 'black',
                        textTransform: 'capitalize',
                        display: 'block',
                        margin: isSmallScreen ? '8px 0' : '0 8px',
                        fontFamily: '"Raleway", serif'
                    }}
                    onClick={() => setDrawerOpen(false)}
                >
                    {section}
                </Button>
            </Link>
        ))
    );

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: nightMode ? '#000000' : 'white',
                    color: nightMode ? 'white' : 'black',
                    boxShadow: 'none',
                    width: '100%',
                    top: showNavbar ? '0px' : '-64px',
                    transition: 'top 0.5s ease-in-out',
                }}
            >
                <Toolbar>
                    {isSmallScreen && (
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => toggleDrawer(true)}
                            sx={{ marginRight: '8px' }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}

                    <IconButton
                        color="inherit"
                        onClick={() => scroll.scrollToTop()}
                        sx={{ marginLeft: '8px' }}
                    >
                        <HomeIcon />
                    </IconButton>

                    {!isSmallScreen && renderLinks()}

                    <Switch
                        checked={nightMode}
                        onChange={() => setNightMode((prevMode) => !prevMode)}
                        sx={{
                            position: 'absolute',
                            right: 16,
                        }}
                    />
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        backgroundColor: nightMode ? '#121212' : 'white',
                        color: nightMode ? 'white' : 'black',
                        width: '150px',
                    },
                }}
            >
                <IconButton
                    onClick={() => toggleDrawer(false)}
                    sx={{ alignSelf: 'flex-end', margin: '16px' }}
                >
                    <CloseIcon />
                </IconButton>
                <List>
                    {['Projects', 'Skills', 'Experience', 'Research', 'Education', 'Certifications', 'Contact'].map((section) => (
                        <ListItem key={section} button onClick={() => setDrawerOpen(false)}>
                            <Link
                                to={section.toLowerCase()}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                style={{ width: '100%', textDecoration: 'none', fontFamily: '"Raleway", serif' }}
                            >
                                <ListItemText
                                    primary={section}
                                    primaryTypographyProps={{
                                        sx: { textAlign: 'left', fontFamily: '"Raleway", serif' },
                                    }}
                                />
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
