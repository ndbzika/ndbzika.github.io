'use client'

import { Box, Flex, Grid, Heading, Spacer, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Paper } from '@/components/Paper';

import styles from './styles.module.scss'

export default function Home() {
  return (
    <>
      <Box as='main'>
        <Box as='section' className={styles.homeSection}>
          <Box as='div'>
            <Text as='div' className={styles.aboutMe}>
              Olá, meu nome é Flávio
              <Heading as='h2'>WEB DEVELOPER</Heading>
              Tenho 19 anos e sou acadêmico de Análise e
              Desenvolvimento de Sistemas. Há 8 meses atuo
              no setor comercial da empresa júnior Loopis,
              com Front-End e Product Designer.
            </Text>
            <Spacer />
            <Box as='details' className={styles.techStack} open>
              <summary>Minhas tecnologias</summary>
              <Grid as='div' templateColumns='repeat(4, 1fr)' gap={10}>
                <Paper name='ReactJS' image='/react.svg' />
                <Paper name='NextJS' image='/nextjs.svg' />
                <Paper name='NodeJS' image='/node.svg' />
                <Paper name='TypeScript' image='/typescript.svg' />
                <Paper name='Java' image='/java.svg' />
                <Paper name='Spring' image='/spring.svg' />
                <Paper name='PostgreSQL' image='/postgres.svg' />
                <Paper name='MongoDB' image='/mongoDB.svg' />
              </Grid>
            </Box>
          </Box>
          <Box as='aside'>
            <Image
            src='/human.svg'
            alt='Homem andando'
            width={300}
            height={460}
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}
