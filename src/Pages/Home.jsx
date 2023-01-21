import { Avatar, Box, Container, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';

import Header from '../components/Header';
import Contacts from '../components/Contacts';
import ProjectsSection from '../components/Projects';
import { BackToTopButton } from '../components/BackToTopButton';

import '../styles/Principal.css'
import '../styles/bootstrap/bootstrap.css'


export const Home = () => {

    const aboutPos = useRef();

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if(scrolled >= 380) {
            setVisible(true)
        } else if(scrolled < aboutPos.current.offsetTop){
            setVisible(false)
        }
    }

    window.addEventListener('scroll', toggleVisible);

    return (  
        <>
        { visible ? <BackToTopButton style={{display: 'inline'}}/> : null }
        <section className='principal'>
            <Header /> 
            <Container sx={{ padding:10, display:'flex',gap:10, alignItems:'center'}}>
                <Avatar alt='Flávio Henrique' src="https://thumbs2.imgbox.com/90/b9/0HtrPDN8_t.png" sx={{ width: 400, height: 400, flexGrow:0 }}/>
                <Box maxWidth='sm' sx={{display:'flex', flexDirection:'column', justifyContent:'center',flexGrow:2, textAlign:'center', backgroundColor:'white', borderRadius:5, width: 300, height: 250}}>
                    <Typography variant='h1' component='h1' color='darkblue' sx={{fontWeight:'bold'}}>Flávio</Typography>
                    <Typography component='h3' variant='h4' color='darkblue' fontStyle='italic'>"Não basta conquistar a sabedoria, é preciso usá-la." <Typography>~ Cícero</Typography></Typography>
                </Box>
            </Container>
        </section>

        <section className='about-me-container' id='sobre-mim' ref={aboutPos}>
            <Box maxWidth='xl' sx={{width:'100%', backgroundColor:'white'}}>
                &nbsp;
                <Typography variant='h2' component='div' textAlign='center' className='about-me-titulo' sx={{ fontWeight:'bold'}}>Quem é Flávio?</Typography>
                <Typography variant='h5' component='p' textAlign='center' className='about-me-texto'>Olá, meu nome é Flávio Henrique e atualmente curso Análise e Desenvolvimento de Sistemas no IFPB campus Cajazeiras. Entusiasta de Front-End e amante da aprendizagem, gosto de desafios evoluir cada dia mais meus conhecimentos.</Typography>
                &nbsp;
            </Box>
        </section>
        &nbsp;
        &nbsp;
        &nbsp;
        <section className='projetos-container' id='projetos' style={{backgroundColor:'#0d214f', height:'75vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            &nbsp;
            <Typography variant='h2' component='h2' sx={{color: 'white', textAlign:'center', fontWeight:'bold'}}>Projetos</Typography>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Container style={{minWidth:400, display:'flex'}}>
                <ProjectsSection />
            </Container>
            &nbsp;
            &nbsp;
            &nbsp;
        </section>
        <section className='contatos-container' id='contatos' style={{ height:'30vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <Container sx={{display:'flex', flexDirection:'column', gap:2, justifyContent:'center'}}>
                <Typography variant='h3' component='div' sx={{color:'#0d214f', fontWeight:'bold', textAlign:'center'}}>Contatos</Typography>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Box sx={{display:'flex', flexDirection:'row', gap:5, justifyContent:'center'}}>
                    <Contacts/>
                </Box>
            </Container>
        </section>
        </>
    );
}

