'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from "next/image";
import REVA from "../public/REVA.png";
import IEEE from "../public/IEEE.png";
import { fabClasses } from '@mui/material';

const classes = {
    container: "flex justify-between items-center lg:py-5 md:py-4 sm:py-3",
    mininavbar: "flex flex-row w-full justify-between items-center bg-black h-8 px-4",
    minilogo: "h-4 w-auto",
    logo: "lg:h-12 md:h-11 md:h-10 sm:h-8 min-[300px]:h-7 w-auto",
}

const pages = ['Home', 'Author Information', 'Program', 'Registration', 'Travel & Accomodation', 'Sponsors'];
const ieee_pages = ['IEEE.org', 'IEEE Xplore Digital Library', 'IEEE Standards', 'IEEE Spectrum', 'More Sites'];
const drawerWidth = 240;

export default function Navbar(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
      
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                ICAECC - 2025
            </Typography>
            <Divider />
            <List>
                {pages.map((page) => (
                <ListItem key={page} disablePadding>
                    <ListItemButton sx={{ textAlign: 'left' }}>
                    <ListItemText primary={page} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Box>
    );

    function HideOnScroll(props) {
        const { children, window } = props;
        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe.
        const trigger = useScrollTrigger({
          target: window ? window() : undefined,
        });
      
        return (
          <Slide appear={false} direction="down" in={!trigger}>
            {children ?? <div />}
          </Slide>
        );
      }

    return (
        <nav>
            <AppBar position='static' className={classes.mininavbar} sx={{backgroundColor: '#000', display: {md: 'flex', xs: 'none'}}}>
                <div className={classes.mininavbar}>    
                <Box sx={{ flexGrow: 0 , display: 'flex'}}>
                        {ieee_pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ color: 'white', display: 'block', paddingX: '0.75rem' }}
                        >
                            {page}
                        </Button>
                        ))}
                </Box>
                <Image className={classes.minilogo} src={IEEE} alt="" />
                </div>
            </AppBar>
            <AppBar position="static">
                <Toolbar className={classes.container} sx={{backgroundColor: '#fff'}}>
                    <Image className={classes.logo} src={REVA} alt="" />
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', lg: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleDrawerToggle}
                        color="black"
                        sx={{padding: '0.25rem'}}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                        anchor='right'
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true,
                            }}
                            sx={{
                                display: { sm: 'block', lg: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                            >
                            {drawer}
                        </Drawer>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', lg: 'flex'} }}>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ color: 'black', display: 'block', paddingX: '0.75rem' }}
                        >
                            {page}
                        </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </nav>
    )
}