"use client";

import { Box, Grid, Heading, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Paper } from "@/components/Paper";
import { motion } from "framer-motion";
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs";
import { usePage } from "./usePage";

import styles from "./styles.module.scss";

export default function Home() {
  const { isTechSTackOpen, handleToggleTechStack } = usePage();

  const techStackContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <main>
        <section className={styles.homeSection}>
          <Box as="div">
            <Text as="div" className={styles.aboutMe}>
              Olá, meu nome é Flávio
              <Heading as="h2">WEB DEVELOPER</Heading>
              Tenho 19 anos e sou acadêmico de Análise e Desenvolvimento de
              Sistemas. Há 8 meses atuo no setor comercial da empresa júnior
              Loopis, com Front-End e Product Designer.
            </Text>
            <motion.ul
              className={styles.techStack}
              initial="hidden"
              animate="visible"
              variants={techStackContainer}
            >
              <p>
                Minhas tecnologias
                <motion.span
                  initial={{ scale: 1, rotate: 0 }}
                  whileTap={{ scale: 0.8, rotate: -180 }}
                  onClick={handleToggleTechStack}
                >
                  {(isTechSTackOpen && <BsArrowsAngleExpand />) || (
                    <BsArrowsAngleContract />
                  )}
                </motion.span>
              </p>
              <motion.div
                initial={{ opacity: 1, visibility: "visible" }}
                animate={{
                  opacity: !isTechSTackOpen ? 1 : 0,
                  visibility: !isTechSTackOpen ? "visible" : "hidden",
                }}
                transition={{ duration: 0.5 }}
              >
                <Paper name="ReactJS" image="/react.svg" />
                <Paper name="NextJS" image="/nextjs.svg" />
                <Paper name="NodeJS" image="/node.svg" />
                <Paper name="TypeScript" image="/typescript.svg" />
                <Paper name="Java" image="/java.svg" />
                <Paper name="Spring" image="/spring.svg" />
                <Paper name="PostgreSQL" image="/postgres.svg" />
                <Paper name="MongoDB" image="/mongoDB.svg" />
              </motion.div>
            </motion.ul>
          </Box>
          <Box as="aside">
            <Image
              src="/human.svg"
              alt="Homem andando"
              width={300}
              height={460}
            />
          </Box>
        </section>
        <Box as="section" id="projects" className={styles.projetosSection}>
          <Heading as="h2">Projetos</Heading>
          <Grid as="div" templateColumns={"repeat(3, 1fr)"} gap={10}>
            <Image
              src="Project1.svg"
              alt="Projeto Loopis Food"
              width={600}
              height={500}
            />
            <Image
              src="Project2.svg"
              alt="Projeto Loopis Food"
              width={600}
              height={500}
            />
          </Grid>
        </Box>
      </main>
    </>
  );
}
