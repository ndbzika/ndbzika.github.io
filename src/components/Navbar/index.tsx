"use client";

import { BsLinkedin, BsGithub, BsList, BsX } from "react-icons/bs";
import Link from "next/link";
import { useNav } from "./useNav";
import { Variants, motion } from "framer-motion";
import { useMediaQuery } from "@chakra-ui/react";

import styles from "./styles.module.scss";

export const Navbar = () => {
  const { isMenuOpen, handleOpenMenu } = useNav();
  const [isLargerThan768] = useMediaQuery("(max-width: 768px)");

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <>
      {(isLargerThan768 && (
        <motion.nav
          className={styles.hamburger}
          onClick={handleOpenMenu}
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
        >
          <motion.button whileTap={{ scale: 0.97 }} onClick={handleOpenMenu}>
            <motion.div
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              {(isMenuOpen && <BsX size="3em" />) || <BsList size="3em" />}
            </motion.div>
          </motion.button>

          <motion.ul
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{
              pointerEvents: isMenuOpen ? "auto" : "none",
              background: "#ffffff",
              borderRadius: 10,
              width: "35vw",
              height: "30vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              listStyle: "none",
              position: "absolute",
              zIndex: 1,
            }}
          >
            <motion.li variants={itemVariants}>
              <Link href="#home" scroll={false}>
                Home
              </Link>
            </motion.li>

            <motion.li variants={itemVariants}>
              <Link href="#projects" scroll={false}>
                Projects
              </Link>
            </motion.li>

            <motion.li variants={itemVariants}>
              <Link href="#skills" scroll={false}>
                Skills
              </Link>
            </motion.li>
            <motion.li
              variants={itemVariants}
              style={{ display: "flex", gap: "1.2rem" }}
            >
              <Link target="_blank" href="https://github.com/ndbzika">
                <BsGithub style={{ color: "#C24A29" }} size="1.8em" />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/flaviohenriquedev/"
              >
                <BsLinkedin style={{ color: "#C24A29" }} size="1.8em" />
              </Link>
            </motion.li>
          </motion.ul>
        </motion.nav>
      )) || (
        <nav className={styles.container}>
          <ul>
            <li>
              <Link href="#home" scroll={false}>
                Home
              </Link>
            </li>

            <li>
              <Link href="#projects" scroll={false}>
                Projects
              </Link>
            </li>

            <li>
              <Link href="#skills" scroll={false}>
                Skills
              </Link>
            </li>
          </ul>

          <div className={styles.icons}>
            <Link target="_blank" href="https://github.com/ndbzika">
              <BsGithub className={styles.icon} size="1.8em" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/flaviohenriquedev/"
            >
              <BsLinkedin className={styles.icon} size="1.8em" />
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};
