import React, { useState } from 'react';
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
import { useMediaQuery } from '@mui/material';

const Navbar = ({ toggleNightMode, nightMode }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width:600px)'); // Detect small screens

    const toggleDrawer = (open) => {
        setDrawerOpen(open);
    };

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

                    {/* Home Link */}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 'bold' }}
                        onClick={() => scroll.scrollToTop()} // Scrolls to the top
                    >
                        Home
                    </Typography>

                    {/* Desktop Links */}
                    {!isSmallScreen && renderLinks()}

                    {/* Night Mode Toggle */}
                    <Switch checked={nightMode} onChange={toggleNightMode} />
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
                                style={{ width: '100%', textDecoration: 'none' }}
                            >
                                <ListItemText
                                    primary={section}
                                    primaryTypographyProps={{
                                        sx: { textAlign: 'center', fontWeight: 'bold' },
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
