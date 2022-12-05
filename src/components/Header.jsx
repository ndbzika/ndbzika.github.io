import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
    return (  
        <div className='header-container'>
            <AppBar color='transparent' >
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Typography variant="h6" color="inherit" component="div">
                            Meu portifólio
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex', justifyContent:'space-evenly' } }}>
                        <Button variant='text' >Sobre Mim</Button>
                        <Button variant='text'>Projetos</Button>
                        <Button variant='text'>Contato</Button>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'flex-end' }}>
                        <Typography variant="h6" color="inherit" component="div">
                            FH
                        </Typography>
                    </Box>
                    
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;