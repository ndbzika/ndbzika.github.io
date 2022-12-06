import React from 'react';

import { AppBar, Avatar, Box, Container, Menu, MenuItem, Toolbar, Typography, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const Header = () => {
    const pages = ['Sobre Mim', 'Projetos', 'Contato'];
    return (  
        <AppBar position='static' color='default'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                <Typography
                        variant="h6"
                        noWrap
                        component="a"
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
                        <Menu
                        id="menu-appbar"
                        keepMounted
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                            {pages.map((page) => (
                                <MenuItem>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                sx={{ my: 2, color: 'blue', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;