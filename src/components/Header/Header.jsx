import React from 'react';

import { AppBar, Box, Container, Menu, MenuItem, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { HiMenu } from 'react-icons/hi'

const Header = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (  
        <AppBar position='static' color='default'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        color: 'inherit',
                        textDecoration: 'none',
                        flexGrow:1
                        }}
                    >
                        Meu Portifólio
                    </Typography>

                    <Box sx={{flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <HiMenu/>
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        keepMounted
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                                <a href="#sobre-mim" style={{textDecoration:'none', color:"black"}}>
                                    <MenuItem key={'sobre-mim'} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">Sobre Mim</Typography>
                                    </MenuItem>
                                </a>

                                <a href="#projetos" style={{textDecoration:'none', color:"black"}}>
                                    <MenuItem key={'projetos'} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">Projetos</Typography>
                                    </MenuItem>
                                </a>

                                <a href="#contatos" style={{textDecoration:'none', color:"black"}}>
                                    <MenuItem key={'contatos'} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">Contatos</Typography>
                                    </MenuItem>
                                </a>

                        </Menu>
                    </Box>
                    




                    {/* //////////////////////////////// */}
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                sx={{ my: 2, color: 'blue', display: 'block' }}
                                href='#sobre-mim'
                            >
                                Sobre Mim
                            </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                sx={{ my: 2, color: 'blue', display: 'block' }}
                                href='#projetos'
                            >
                                Projetos
                            </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                sx={{ my: 2, color: 'blue', display: 'block' }}
                                href='#contatos'
                            >
                                Contatos
                            </Button>
                    </Box>
                    
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;