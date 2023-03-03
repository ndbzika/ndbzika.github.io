import { Box, Container, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';

import Header from '../components/Header/Header';
import Contacts from '../components/Contacts/Contacts';
import ProjectsSection from '../components/Projects/Projects';
import { BackToTopButton } from '../components/BackToTopButton/BackToTopButton';

import '../styles/Principal.css';
import { PrincipalPage } from '../components/PrincipalPage';
import { AboutMe } from '../components/AboutMe';

export const Home = () => {
  const aboutPos = useRef();

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled >= 380) {
      setVisible(true);
    } else if (scrolled < aboutPos.current.offsetTop) {
      setVisible(false);
    }
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      {visible ? <BackToTopButton style={{ display: 'inline' }} /> : null}

      <section className="principal">
        <Header />
        <PrincipalPage />
      </section>

      <section className="about-me-container" id="sobre-mim" ref={aboutPos}>
        <AboutMe />
      </section>

      <section
        className="projetos-container"
        id="projetos"
        style={{
          backgroundColor: '#0d214f',
          height: '75vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}
        >
          Projetos
        </Typography>
        <Container style={{ minWidth: 400, display: 'flex', padding: '5rem' }}>
          <ProjectsSection />
        </Container>
      </section>

      <section
        className="contatos-container"
        id="contatos"
        style={{
          height: '30vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h3"
            component="div"
            sx={{ color: '#0d214f', fontWeight: 'bold', textAlign: 'center' }}
          >
            Contatos
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 5,
              justifyContent: 'center',
              padding: '30px',
            }}
          >
            <Contacts />
          </Box>
        </Container>
      </section>
    </>
  );
};
