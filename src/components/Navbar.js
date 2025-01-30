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

const Navbar = ({ toggleNightMode, nightMode }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true); // State to track visibility
    const isSmallScreen = useMediaQuery('(max-width:600px)'); // Detect small screens
    let lastScrollY = 0; // Variable to track scroll position

    const toggleDrawer = (open) => {
        setDrawerOpen(open);
    };

    const handleScroll = () => {
        // Check the scroll direction and show/hide navbar accordingly
        if (window.scrollY < lastScrollY) {
            // Scroll up - show navbar
            setShowNavbar(true);
        } else {
            // Scroll down - hide navbar
            setShowNavbar(false);
        }
        lastScrollY = window.scrollY; // Update last scroll position
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // Listen to scroll events

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const renderLinks = () => (
        ['Experience', 'Projects', 'Research', 'Education', 'About', 'Skills', 'Contact'].map((section) => (
            <Link
                key={section}
                to={section.toLowerCase()} // Matches section IDs in App.js
                smooth={true}
                duration={500}
                offset={-70} // Adjust for navbar height
            >
                <Button
                    sx={{
                        color: nightMode ? 'white' : 'black',
                        textTransform: 'capitalize',
                        display: 'block', // For better alignment in the drawer
                        margin: isSmallScreen ? '8px 0' : '0 8px',
                        fontFamily: '"Raleway", serif'
                    }}
                    onClick={() => setDrawerOpen(false)} // Close drawer after clicking
                >
                    {section}
                </Button>
            </Link>
        ))
    );

    return (
        <>
            <AppBar
                position="fixed" // Keep the navbar fixed on the screen
                sx={{
                    backgroundColor: nightMode ? '#000000' : 'white', // Explicit hex for black
                    color: nightMode ? 'white' : 'black',
                    boxShadow: 'none',
                    width: '100%', // Ensure it stretches full width
                    top: showNavbar ? '0px' : '-64px', // Slide navbar up or down
                    transition: 'top 0.5s ease-in-out', // Smooth sliding effect
                }}
            >
                <Toolbar>
                    {/* Mobile Menu Icon (Left-Aligned) */}
                    {isSmallScreen && (
                        <IconButton
                            edge="start" // Aligns the menu icon to the top-left
                            color="inherit"
                            onClick={() => toggleDrawer(true)}
                            sx={{ marginRight: '8px' }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}

                    {/* Home Icon (instead of "Home") */}
                    <IconButton
                        color="inherit"
                        onClick={() => scroll.scrollToTop()} // Scroll to the top when clicked
                        sx={{ marginLeft: '8px' }}
                    >
                        <HomeIcon />
                    </IconButton>

                    {/* Desktop Links */}
                    {!isSmallScreen && renderLinks()}

                    {/* Night Mode Toggle (Shifted to the top right) */}
                    <Switch
                        checked={nightMode}
                        onChange={toggleNightMode}
                        sx={{
                            position: 'absolute',
                            right: 16, // Align to the top-right
                        }}
                    />
                </Toolbar>
            </AppBar>

            {/* Drawer for Mobile Navigation */}
            <Drawer
                anchor="left" // Opens the drawer from the left
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
                    {['Experience', 'Projects', 'Research', 'Education', 'About', 'Skills', 'Contact'].map((section) => (
                        <ListItem key={section} button onClick={() => setDrawerOpen(false)}>
                            <Link
                                to={section.toLowerCase()} // Matches section IDs in App.js
                                smooth={true}
                                duration={500}
                                offset={-70}
                                style={{ width: '100%', textDecoration: 'none' , fontFamily: '"Raleway", serif'}}
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
