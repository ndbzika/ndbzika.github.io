/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";
import {
  AnchorLink,
  Container,
  Dash,
  Github,
  IconButton,
  Linkedin,
  Links,
  HamgurberIcon,
  CloseIcon,
  SocialLinks,
  SidebarWrapper,
  StyledMenu,
} from "./styled";
import { useMediaQuery } from "usehooks-ts";
import { useState } from "react";
import gsap from "gsap";

export const Header = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleShowSideMenu = (e: any) => {
    e.preventDefault();
    gsap.to(e.currentTarget, { rotation: "+=360", duration: 0.5 });
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    (matches && (
      <Container>
        <Links>
          <AnchorLink href="/">
            <Dash>//</Dash>Home
          </AnchorLink>
          <AnchorLink href="/#about">
            <Dash>//</Dash>About
          </AnchorLink>
          <AnchorLink href="/#passion">
            <Dash>//</Dash>Passion
          </AnchorLink>
          <AnchorLink href="/projects">
            <Dash>//</Dash>Projects
          </AnchorLink>
        </Links>
        <SocialLinks>
          <Link href="https://www.github.com/ndbzika" target="_blank">
            <Github size={32} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/flaviohenriquedev"
            target="_blank"
          >
            <Linkedin size={32} />
          </Link>
        </SocialLinks>
      </Container>
    )) || (
      <Container>
        <IconButton onClick={(e) => handleShowSideMenu(e)}>
          {isMenuOpen ? <CloseIcon /> : <HamgurberIcon />}
        </IconButton>
        <SidebarWrapper isOpen={isMenuOpen}>
          {isMenuOpen && (
            <StyledMenu>
              <AnchorLink href="/">
                <Dash>//</Dash>Home
              </AnchorLink>

              <AnchorLink href="/#about">
                <Dash>//</Dash>About
              </AnchorLink>

              <AnchorLink href="/#passion">
                <Dash>//</Dash>Passion
              </AnchorLink>

              <AnchorLink href="/projects">
                <Dash>//</Dash>Projects
              </AnchorLink>

              <SocialLinks>
                <Link href="https://www.github.com/ndbzika" target="_blank">
                  <Github size={32} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/flaviohenriquedev"
                  target="_blank"
                >
                  <Linkedin size={32} />
                </Link>
              </SocialLinks>
            </StyledMenu>
          )}
        </SidebarWrapper>
      </Container>
    )
  );
};
