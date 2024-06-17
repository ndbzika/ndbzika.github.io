'use client'

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { AvalibleProject, Container, MainContainer, PreTilte, ProjectList, ProjectTitle, Text, Title, TitleCursor, TitleText, UnavalibleProject } from './styled';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);

export default function Home() {
  const [phrases] = useState([
    'Flávio.',
    'Programador.',
    'Desenvolvedor.',
    'Sonhador.',
    'Criador.',
    'Inovador.',

  ]);

  const preTitleRef = useRef(null);
  const cursorRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.from(preTitleRef.current, { duration: 1, y: '5vw', ease: 'power2.out', onComplete: () => {masterTl.play()}});
    gsap.to(cursorRef.current, { opacity: 0, ease: 'power2.inOut', repeat: -1 });

    const masterTl = gsap.timeline({repeat: -1}).pause();
    phrases.forEach((phrase, i) => {
      const tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1});
      tl.to(textRef.current, { duration: 1.5, text: phrase });
      masterTl.add(tl);
    });
  })


  return (
    <Container hasheader={true}>
      <Header />
      <MainContainer>
        <Container>
          <Title>
            <PreTilte ref={preTitleRef}>Olá, eu sou</PreTilte>
            <br />
            <TitleText ref={textRef}></TitleText>
            <TitleCursor ref={cursorRef}>_</TitleCursor>
          </Title>
          <div>
            <Text>Meu nome é Flávio Henrique, sou um programador web residente no Brasil. Desenvolvi e colaborei em muitos tipos de projetos, desde landing pages até plataformas de e-commerce.</Text>
            <Text>Sou apaixonado por interfaces de ponta, novos desafios e segurança de dados.</Text>
          </div>
        </Container>
        <Container>
          <ProjectTitle>Projetos</ProjectTitle>
          <ProjectList>
            <AvalibleProject >
              <Link href='https://github.com/ndbzika/Accommodo-API'>Accommodo</Link>
            </AvalibleProject>
            <AvalibleProject>
              <Link href='https://buscadordelivros.netlify.app/'>Localizador de livros</Link>
            </AvalibleProject>
            <AvalibleProject>
              <Link href='https://unrivaled-fairy-e4f880.netlify.app/'>Localizador de endereços IP</Link>
            </AvalibleProject>
            <AvalibleProject>
              <Link href='https://crimealert.surge.sh/'>CrimeAlert</Link>
            </AvalibleProject>
            <UnavalibleProject>
              <Link href='#'>PB Júnior</Link>
            </UnavalibleProject>
            <UnavalibleProject>
              <Link href='#'>EcoAlerta</Link>
            </UnavalibleProject>
          </ProjectList>
        </Container>
      </MainContainer>
      <Footer />
    </Container>
  );
}
