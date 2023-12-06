"use client";

import { Header } from "@/components/Header";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap, { SteppedEase } from "gsap";
import {
  AboutSection,
  Card,
  Divider,
  HomeSection,
  Main,
  PassionCard,
  PassionCardContainer,
  PassionSection,
  TechStack,
} from "./styled";

import ShakingHand from "../../public/ShakingHand.svg";
import ReactImg from "../../public/react.svg";
import JavaScriptImg from "../../public/javascript.svg";
import TypeScriptImg from "../../public/typescript.svg";
import NodeImg from "../../public/node.svg";
import FlavioImg from "../../public/flavio.png";
import BulbImg from "../../public/bulb.svg";
import CodeImg from "../../public/code.svg";

export default function Home() {
  const handRef = useRef(null);

  useLayoutEffect(() => {
    gsap.to(handRef.current, {
      rotation: 20,
      yoyo: true,
      repeat: -1,
      duration: 0.2,
      repeatDelay: 0.6,
    });
  }, []);

  return (
    <>
      <Header />
      <Main>
        <HomeSection id="home">
          <div>
            <span>
              <Image id="" src={ShakingHand} alt="Shaking hand" ref={handRef} />{" "}
              Hi, I&apos;m Flávio
            </span>
            <h1>
              FULLSTACK WEB
              <TechStack>
                <Image src={JavaScriptImg} alt="JavaScript" />
                <Image src={TypeScriptImg} alt="TypeScript" />
                <Image src={ReactImg} alt="React" />
                <Image src={NodeImg} alt="Node" />
              </TechStack>{" "}
              DEVELOPER <span>&</span> DESIGNER
            </h1>
          </div>
        </HomeSection>

        <AboutSection id="about">
          <h2>Meet me</h2>
          <Divider color="text" />
          <Card>
            <div>
              <p>
                I&apos;m 19 years old and studying Systems Analysis and
                Development. I&apos;ve been working in the commercial sector of
                the junior company Loopis for 11 months, mainly with Front-End
                and UX/UI.
              </p>
              <p>
                I&apos;m a creative developer specializing in crafting
                delightful web experiences. I can provide guidance to your
                company on various aspects of the web platform, including
                performance optimization and creative user interactions.
              </p>
            </div>
            <Image src={FlavioImg} alt="Flávio Henrique" />
          </Card>
        </AboutSection>

        <PassionSection id="passion">
          <h2>What I do</h2>
          <Divider color="background" />
          <PassionCardContainer>
            <PassionCard>
              <Image src={BulbImg} alt="Bulb" />
              <h3>Design</h3>
              <p>
                Design isn&apos;t just what a product looks like and feels like
                on the outside. Design encompasses the internal functionality of
                a product as well as the overall user experience. I strive to
                design interfaces and experiences that people can enjoy on all
                digital mediums.
              </p>
            </PassionCard>
            <PassionCard>
              <Image src={CodeImg} alt="Code tags" />
              <h3>Development</h3>
              <p>
                With a strong foundation in computer science, I&apos;m
                passionate about web design and development, and interested in
                mobile app development. As I grow as a developer, I hope to
                write clean, readable code that can be used by others and
                leveraged to create beautiful software.
              </p>
            </PassionCard>
          </PassionCardContainer>
        </PassionSection>
      </Main>
      <footer>
        <p>
          Made with <span>♥</span> by Flávio Henrique
        </p>
      </footer>
    </>
  );
}
