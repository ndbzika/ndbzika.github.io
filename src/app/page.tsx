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
  TechStack,
} from "./styled";

import ShakingHand from "../../public/ShakingHand.svg";
import ReactImg from "../../public/react.svg";
import JavaScriptImg from "../../public/javascript.svg";
import TypeScriptImg from "../../public/typescript.svg";
import NodeImg from "../../public/node.svg";
import FlavioImg from "../../public/flavio.png";

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
        <HomeSection>
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
          <Divider />
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
      </Main>
    </>
  );
}
