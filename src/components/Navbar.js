import React, { useState, useEffect, useRef } from 'react';
import { Box, Drawer, IconButton, List, ListItem, ListItemText, useTheme } from '@mui/material';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useMediaQuery } from '@mui/material';

const SECTIONS = ['Projects', 'Skills', 'Experience', 'Research', 'Education', 'Contact'];

const Navbar = ({ toggleNightMode, nightMode }) => {
    const theme = useTheme();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const isSmallScreen = useMediaQuery('(max-width:900px)');
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            setShowNavbar(window.scrollY < lastScrollY.current || window.scrollY < 80);
            lastScrollY.current = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const linkSx = {
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: '0.72rem',
        letterSpacing: '0.06em',
        color: theme.palette.text.secondary,
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'color 0.15s ease',
        '&:hover': { color: theme.palette.primary.main },
    };

    return (
        <>
            <Box
                component="nav"
                sx={{
                    position: 'fixed',
                    top: showNavbar ? 0 : -64,
                    left: 0,
                    right: 0,
                    zIndex: 20,
                    height: 64,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: { xs: 2.5, sm: 4 },
                    backgroundColor: 'background.default',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    transition: 'top 0.35s ease-in-out',
                }}
            >
                <Box
                    component="a"
                    href="#about"
                    sx={{
                        fontFamily: '"Raleway", sans-serif',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        color: 'text.primary',
                        textDecoration: 'none',
                    }}
                >
                    GG
                </Box>

                {!isSmallScreen && (
                    <Box sx={{ display: 'flex', gap: 4 }}>
                        {SECTIONS.map((section) => (
                            <Link key={section} to={section.toLowerCase()} smooth duration={400} offset={-70}>
                                <Box sx={linkSx}>{section.toUpperCase()}</Box>
                            </Link>
                        ))}
                    </Box>
                )}

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton onClick={toggleNightMode} size="small" sx={{ color: 'text.secondary' }}>
                        {nightMode ? <LightModeOutlinedIcon fontSize="small" /> : <DarkModeOutlinedIcon fontSize="small" />}
                    </IconButton>
                    {isSmallScreen && (
                        <IconButton onClick={() => setDrawerOpen(true)} size="small" sx={{ color: 'text.secondary' }}>
                            <MenuIcon fontSize="small" />
                        </IconButton>
                    )}
                </Box>
            </Box>

            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{ sx: { backgroundColor: 'background.default', width: '180px' } }}
            >
                <IconButton onClick={() => setDrawerOpen(false)} sx={{ alignSelf: 'flex-end', margin: '12px' }}>
                    <CloseIcon />
                </IconButton>
                <List>
                    {SECTIONS.map((section) => (
                        <ListItem key={section} button onClick={() => setDrawerOpen(false)}>
                            <Link to={section.toLowerCase()} smooth duration={400} offset={-70} style={{ width: '100%', textDecoration: 'none' }}>
                                <ListItemText
                                    primary={section}
                                    primaryTypographyProps={{ sx: { fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8rem', color: 'text.primary' } }}
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
