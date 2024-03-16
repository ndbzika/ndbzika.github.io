"use client";

import { Header } from "@/components/Header";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  AboutSection,
  Card,
  ContactSection,
  Divider,
  HomeSection,
  Main,
  SendButton,
} from "../styles/HomeStyled";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ShakingHand from "../../public/ShakingHand.svg";

import theme from "@/styles/theme";

export default function Home() {
  const [currentBg, setCurrentBg] = useState(theme.colors.background);
  let mainRef = useRef(null);
  const handRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(handRef.current, {
      rotation: 20,
      yoyo: true,
      repeat: -1,
      duration: 0.2,
      repeatDelay: 0.6,
    });
  }, []);

  useEffect(() => {
    gsap.to(mainRef.current, {
      background: currentBg,
      duration: 1,
    });
  }, [currentBg]);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        start: "top 90%",
        end: "bottom 30%",
        onLeave: () =>
          setCurrentBg(
            `linear-gradient(to top, #000000 30%, ${theme.colors.background} 70%)`
          ),
      },
    });
  });

  useEffect(() => {
    gsap.from("#home", {
      scale: 0.5,
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      scrollTrigger: "#home",
    });
    gsap.from("#about", {
      opacity: 0,
      duration: 1,
      delay: 1,
      scrollTrigger: "#about",
    });

    gsap.from("#passion", {
      opacity: 0,
      duration: 1,
      delay: 0.7,
      scrollTrigger: "#passion",
    });

    gsap.from("#contact", {
      opacity: 0,
      duration: 1,
      delay: 0.7,
      scrollTrigger: "#contact",
    });
  }, []);

  return (
    <>
      <Header />
      <Main ref={mainRef}>
        <HomeSection id="home">
          <div>
            <span>
              <Image id="" src={ShakingHand} alt="Shaking hand" ref={handRef} />{" "}
              Hi, I&apos;m Flávio
            </span>
            <h1>
              FULLSTACK DEVELOPER
            </h1>
          </div>
        </HomeSection>

        <AboutSection id="about">
          <h2>Meet me</h2>
          <Divider color="text" />
          <Card>
            <div>
              <p>
                I&apos;m 19 years old and I&apos;m studying Systems Analysis and Development.
                I&apos;m currently working on a voluntary basis at the junior company
                Loopis Jr, as Project Director.
              </p>
              <p>
                I&apos;m a creative programmer who specializes in creating enjoyable
                web experiences. I work across front-end, back-end, devops and
                database. I also have a fondness for information security, which
                is my hobby in addition to Brazilian jiu-jitsu.
              </p>
            </div>
          </Card>
        </AboutSection>

        <ContactSection id="contact">
          <h3>
            Whether you have an idea for a project or just want to chat, feel
            free to shoot me an email!
          </h3>
          <SendButton href="mailto:flaviohenriquefc@gmail.com">
            Say Hello
          </SendButton>
        </ContactSection>
      </Main>
    </>
  );
}
