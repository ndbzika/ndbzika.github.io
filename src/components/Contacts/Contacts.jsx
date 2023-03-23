import { Box } from '@mui/material';
import React from 'react';

import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { Contact } from '../Contact';

const Contacts = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
        }}
      >
        <Contact
          icon={<FaLinkedin />}
          link="https://www.linkedin.com/in/flaviohenriquedev/"
          color="#0e76a8"
        >
          Linkedin
        </Contact>

        <Contact
          icon={<FaGithub />}
          link="https://github.com/ndbzika"
          color="#282828"
        >
          GitHub
        </Contact>

        <Contact
          icon={<FaTwitter />}
          link="https://twitter.com/IndexFhms"
          color="#0e76a8"
        >
          Twitter
        </Contact>
      </Box>
    </>
  );
};

export default Contacts;
