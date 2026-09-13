import React, { useState, useEffect, useRef } from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    Switch,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    useTheme,
} from '@mui/material';
import { Link, animateScroll as scroll } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import { useMediaQuery } from '@mui/material';

const SECTIONS = ['About', 'Projects', 'Skills', 'Experience', 'Research', 'Education', 'Certifications', 'Contact'];

const Navbar = ({ toggleNightMode, nightMode }) => {
    const theme = useTheme();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const lastScrollY = useRef(0);

    const toggleDrawer = (open) => setDrawerOpen(open);

    useEffect(() => {
        const handleScroll = () => {
            setShowNavbar(window.scrollY < lastScrollY.current || window.scrollY < 80);
            lastScrollY.current = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const renderLinks = () => (
        SECTIONS.map((section) => (
            <Link
                key={section}
                to={section.toLowerCase()}
                smooth={true}
                duration={400}
                offset={-70}
            >
                <Button
                    sx={{
                        color: 'text.secondary',
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 500,
                        fontSize: '0.88rem',
                        display: 'block',
                        margin: isSmallScreen ? '8px 0' : '0 6px',
                        '&:hover': { color: 'primary.main', backgroundColor: 'transparent' },
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
                elevation={0}
                sx={{
                    backgroundColor: 'background.paper',
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    width: '100%',
                    top: showNavbar ? '0px' : '-64px',
                    transition: 'top 0.4s ease-in-out',
                }}
            >
                <Toolbar>
                    {isSmallScreen && (
                        <IconButton
                            edge="start"
                            sx={{ marginRight: '8px', color: 'text.primary' }}
                            onClick={() => toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}

                    <IconButton
                        sx={{ marginLeft: '8px', color: 'text.primary' }}
                        onClick={() => scroll.scrollToTop()}
                    >
                        <HomeIcon />
                    </IconButton>

                    {!isSmallScreen && renderLinks()}

                    <Switch
                        checked={nightMode}
                        onChange={toggleNightMode}
                        sx={{ position: 'absolute', right: 16 }}
                    />
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        backgroundColor: 'background.paper',
                        width: '160px',
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
                    {SECTIONS.map((section) => (
                        <ListItem key={section} button onClick={() => setDrawerOpen(false)}>
                            <Link
                                to={section.toLowerCase()}
                                smooth={true}
                                duration={400}
                                offset={-70}
                                style={{ width: '100%', textDecoration: 'none' }}
                            >
                                <ListItemText
                                    primary={section}
                                    primaryTypographyProps={{
                                        sx: { textAlign: 'left', fontFamily: '"Inter", sans-serif', color: 'text.primary' },
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
