import { Box, Link, Typography } from '@mui/material';
import React from 'react';

import { FaDiscord, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';


const Contacts = () => {
    return (  
        <>
            <Box  sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                <Link underline="none" color="black">
                    <FaDiscord />
                    <Typography variant='p' component='div'>Discord</Typography>
                </Link>
            </Box>

            <Box>
                <Link underline="none" color="black">
                    <FaLinkedin/>
                    <Typography variant='p' component='div'>Linkedin</Typography>
                </Link>
            </Box>

            <Box>
                <Link underline="none" color="black">
                    <FaGithub/>
                    <Typography variant='p' component='div'>GitHub</Typography>
                </Link>
            </Box>

            <Box>
                <Link underline="none" color="black">
                    <FaTwitter/>
                    <Typography variant='p' component='div'>Twitter</Typography>
                </Link>
            </Box>
        </>
    );
}

export default Contacts;