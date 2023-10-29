"use client";

import Link from "next/link";
import { Container, Content, HStack, Info, Title } from "./styled";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Container>
        <Title>FHMS - Portfolio</Title>
        <Content>
          <Info>
            Sorry, but this page is under construction. <br />
            You can acess my social media below.
          </Info>
          <HStack>
            <Link href="https://www.github.com/ndbzika" target="_blank">
              <FaGithub size={32} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/flaviohenriquedev"
              target="_blank"
            >
              <FaLinkedin size={32} />
            </Link>
            <Link href="mailto:flaviohenriquefc@gmail.com">
              <FaEnvelope size={32} />
            </Link>
          </HStack>
        </Content>
      </Container>
    </>
  );
}
