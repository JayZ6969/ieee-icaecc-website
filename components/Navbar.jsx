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
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';  
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from "next/image";
import REVA from "../public/REVA_1.png";
import IEEE from "../public/IEEE.png";

const classes = {
    container: "w-full fixed top-0 z-40",
    wrapper: "flex justify-between items-center lg:py-5 md:py-4 sm:py-3",
    mininavbar: "flex flex-row w-full justify-between items-center bg-black h-8 px-4",
    minilogo: "h-4 w-auto",
    logo: "lg:h-12 md:h-11 md:h-10 xs:h-9 h-8 w-auto",
}

const pages = ['Home', 'Author Information', 'Program', 'Registration', 'Travel & Accomodation', 'Contact Us'];
const home = [
    {name: 'About ICAECC', link: '/home/about-icaecc'},
    {name: 'Organizers', link: '/home/organizers'}, 
    {name: 'Past Conferences', link: '/home/past-conferences'}, 
    {name: 'General FAQ', link: '/home/general-faq'}
];
const authorInformation = [
    {name: 'Topics', link: '/author-information/topics'},
    {name: 'Author Submission', link: '/author-information/author-submission'},
    {name: 'CFP', link: '/author-information/cfp'},
    {name: 'Tutorials', link: '/author-information/tutorials'},
    {name: 'Student Research Forum', link: '/author-information/student-research-forum'}
];
const program = [
    {name: 'Keynote Sessions', link: '/program/keynote-sessions'},
    {name: 'Workshop', link: '/program/workshop'},
    {name: 'Invited Speakers', link: '/program/invited-speakers'}
];

const ieee_pages = ['IEEE.org', 'IEEE Xplore Digital Library', 'IEEE Standards', 'IEEE Spectrum', 'More Sites'];
const ieee_links = ['https://www.ieee.org', 'https://ieeexplore.ieee.org', 'https://standards.ieee.org', 'https://spectrum.ieee.org', 'https://www.ieee.org/sitemap.html'];

const drawerWidth = 240;

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
     
    const [open, setOpen] = React.useState({
        home: false,
        authorInformation: false,
        program: false,
        registration: false,
        travel: false,
        sponsors: false,
    });

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        setOpen(false);
    }

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    
    const handleClick = (menu) => {
        setOpen((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
        setAnchorElNav((prevState) => (prevState ? null : menu));
    }; 

    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                ICAECC - 2025
            </Typography>
            <Divider />
            <List>
                <ListItem sx={{flexDirection: 'column'}}  disablePadding>
                    <ListItemButton sx={{ textAlign: 'left', alignItems: 'space-between', width: '100%' }} onClick={() => handleClick('home')}>
                        <ListItemText primary="Home" />
                        {open.home ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton> 
                    <Collapse in={open.home} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {home.map((item,index) => (
                                <ListItemButton key={index} component="a" href={item.link} sx={{ pl: 4 }}>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>
                </ListItem>

                <ListItem sx={{flexDirection: 'column'}}  disablePadding>
                    <ListItemButton sx={{ textAlign: 'left', alignItems: 'space-between', width: '100%' }} onClick={() => handleClick('authorInformation')}>
                        <ListItemText primary="Author Information" />
                        {open.authorInformation ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton> 
                    <Collapse in={open.authorInformation} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {authorInformation.map((item,index) => (
                                <ListItemButton key={index} component="a" href={item.link} sx={{ pl: 4 }}>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>
                </ListItem>

                <ListItem sx={{flexDirection: 'column'}}  disablePadding>
                    <ListItemButton sx={{ textAlign: 'left', alignItems: 'space-between', width: '100%' }} onClick={() => handleClick('program')}>
                        <ListItemText primary="Program" />
                        {open.program ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton> 
                    <Collapse in={open.program} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {program.map((item, index) => (
                                <ListItemButton key={index} component="a" href={item.link} sx={{ pl: 4 }}>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>
                </ListItem>

                <ListItem sx={{flexDirection: 'column'}}  disablePadding>
                    <ListItemButton sx={{ textAlign: 'left', alignItems: 'space-between', width: '100%' }} onClick={handleClick}>
                        <ListItemText primary="Registration" />
                    </ListItemButton> 
                </ListItem>

                <ListItem sx={{flexDirection: 'column'}}  disablePadding>
                    <ListItemButton sx={{ textAlign: 'left', alignItems: 'space-between', width: '100%' }} onClick={handleClick}>
                        <ListItemText primary="Travel & Accomodation" />
                    </ListItemButton> 
                </ListItem>

                <ListItem sx={{flexDirection: 'column'}}  disablePadding>
                    <ListItemButton sx={{ textAlign: 'left', alignItems: 'space-between', width: '100%' }} onClick={handleClick}>
                        <ListItemText primary="Sponsors" />
                    </ListItemButton> 
                </ListItem>
            </List>
        </Box>
    );

    return (
        <nav className={classes.container}>
            <AppBar position='static' className={classes.mininavbar} sx={{backgroundColor: '#000', display: {md: 'flex', xs: 'none'}}}>
                <div className={classes.mininavbar}>    
                <Box sx={{ flexGrow: 0 , display: 'flex'}}>
                        {ieee_pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ color: 'white', display: 'block', paddingX: '0.75rem' }}
                            component="a"
                            {...{ href: ieee_links[ieee_pages.indexOf(page)] }}
                            target="_blank"
                        >
                            {page}
                        </Button>
                        ))}
                </Box>
                <Image className={classes.minilogo} src={IEEE} alt="" />
                </div>
            </AppBar>
            <AppBar position="static">
                <Toolbar className={classes.wrapper} sx={{backgroundColor: '#fff'}}>
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
                        <div>
                            <Button
                                id="basic-button-home"
                                aria-controls={open.home ? 'home-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open.home ? 'true' : undefined}   
                                onClick={() => handleClick('home')}
                                sx={{ color: 'black', display: 'flex', paddingX: '0.75rem' }}
                                endIcon={open.home ? <ExpandLess /> : <ExpandMore />}
                            >
                                Home      
                            </Button>
                            <Menu
                                id={`${open.home ? 'home-menu' : ''}`}
                                anchorEl={anchorElNav ? document.querySelector(`#basic-button-${anchorElNav}`) : null}
                                open={!!anchorElNav && open.home}
                                onClose={handleCloseNavMenu}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                sx={{display: {lg: 'flex', xs: 'none'}}}
                            >
                                {home.map((item,index) => (
                                    <MenuItem key={index} component="a" href={item.link} onClick={handleCloseNavMenu}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>

                        <div>
                            <Button
                                id="basic-button-authorInformation"
                                aria-controls={open.authorInformation ? 'author-information' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open.authorInformation ? 'true' : undefined}   
                                onClick={() => handleClick('authorInformation')}
                                sx={{ color: 'black', display: 'flex', paddingX: '0.75rem' }}
                                endIcon={open.authorInformation ? <ExpandLess /> : <ExpandMore />}
                            >
                                Author Information     
                            </Button>
                            <Menu
                                id={`${open.authorInformation ? 'author-information' : ''}`}
                                anchorEl={anchorElNav ? document.querySelector(`#basic-button-${anchorElNav}`) : null}
                                open={!!anchorElNav && open.authorInformation}
                                onClose={handleCloseNavMenu}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                sx={{display: {lg: 'flex', xs: 'none'}}}
                            >
                               {authorInformation.map((item,index) => (
                                    <MenuItem key={index} component="a" href={item.link} onClick={handleCloseNavMenu}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>

                        <div>
                            <Button
                                id="basic-button-program"
                                aria-controls={open.program ? 'program' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open.program ? 'true' : undefined}   
                                onClick={() => handleClick('program')}
                                sx={{ color: 'black', display: 'flex', paddingX: '0.75rem' }}
                                endIcon={open.program ? <ExpandLess /> : <ExpandMore />}
                            >
                                Program     
                            </Button>
                            <Menu
                                id={`${open.program ? 'program' : ''}`}
                                anchorEl={anchorElNav ? document.querySelector(`#basic-button-${anchorElNav}`) : null}
                                open={!!anchorElNav && open.program}
                                onClose={handleCloseNavMenu}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                sx={{display: {lg: 'flex', xs: 'none'}}}
                            >
                                {program.map((item,index) => (
                                    <MenuItem key={index} component="a" href={item.link} onClick={handleCloseNavMenu}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                        
                        <div>
                            <Button
                                id="basic-button-registration"
                                aria-controls={open.registration ? 'registration' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open.registration ? 'true' : undefined}   
                                onClick={() => handleClick('registration')}
                                sx={{ color: 'black', display: 'flex', paddingX: '0.75rem' }}
                                endIcon={open.registration ? <ExpandLess /> : <ExpandMore />}
                            >
                                Registration    
                            </Button>
                        </div>

                        <div>
                            <Button
                                id="basic-button-travel"
                                aria-controls={open.travel ? 'travel' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open.travel ? 'true' : undefined}   
                                onClick={() => handleClick('travel')}
                                sx={{ color: 'black', display: 'flex', paddingX: '0.75rem' }}
                                endIcon={open.travel ? <ExpandLess /> : <ExpandMore />}
                            >
                                Travel & Accomodation   
                            </Button>
                        </div>

                        <div>
                            <Button
                                id="basic-button-sponsors"
                                aria-controls={open.sponsors ? 'sponsors' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open.sponsors ? 'true' : undefined}   
                                onClick={() => handleClick('sponsors')}
                                sx={{ color: 'black', display: 'flex', paddingX: '0.75rem' }}
                                endIcon={open.sponsors ? <ExpandLess /> : <ExpandMore />}
                            >
                                Sponsors  
                            </Button>
                        </div>
                    </Box>
                </Toolbar>
            </AppBar>
        </nav>
    )
}