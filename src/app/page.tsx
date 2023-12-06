"use client";

import { Header } from "@/components/Header";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap, { SteppedEase } from "gsap";

import ShakingHand from "../../public/ShakingHand.svg";
import ReactImg from "../../public/react.svg";
import JavaScriptImg from "../../public/javascript.svg";
import TypeScriptImg from "../../public/typescript.svg";
import NodeImg from "../../public/node.svg";
import { HomeSection, Main, TechStack } from "./styled";

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
      </Main>
    </>
  );
}
