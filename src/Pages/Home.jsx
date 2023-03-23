import { Container, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';

import Header from '../components/Header/Header';
import Contacts from '../components/Contacts/Contacts';
import ProjectsSection from '../components/Projects/Projects';
import { BackToTopButton } from '../components/BackToTopButton/BackToTopButton';

import '../styles/Principal.css';
import { PrincipalPage } from '../components/PrincipalPage';
import { AboutMe } from '../components/AboutMe';
import { Footer } from '../components/Footer';

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

  const spacingPrincipalPage = (windowHeight) => {
    console.log(windowHeight);
    if (windowHeight >= 1000) {
      console.log('deu certo');
      return windowHeight - 800;
    } else if (windowHeight >= 600) {
      return windowHeight - 700;
    }
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      {visible ? <BackToTopButton style={{ display: 'inline' }} /> : null}

      <section
        className="principal"
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          rowGap: spacingPrincipalPage(window.innerHeight),
        }}
      >
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
          backgroundColor: '#fff',
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
          sx={{ color: '#0d0d0d', textAlign: 'center', fontWeight: 'bold' }}
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
        <Footer>
          <Contacts />
        </Footer>
      </section>
    </>
  );
};
