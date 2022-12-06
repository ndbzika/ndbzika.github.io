import { Box } from '@mui/material';
import React from 'react';

import { FaDiscord, FaLinkedin } from 'react-icons/fa';


const Contacts = () => {
    return (  
        <>
            <Box>
                <FaDiscord/>
            </Box>

            <Box>
                <FaLinkedin/>
            </Box>
        </>
    );
}

export default Contacts;