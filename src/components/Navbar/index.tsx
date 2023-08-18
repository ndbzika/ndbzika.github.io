"use client";

import { Box, HStack } from "@chakra-ui/react";
import { BsLinkedin, BsGithub, BsList } from "react-icons/bs";
import Link from "next/link";
import { useNav } from "./useNav";

import styles from "./styles.module.scss";

export const Navbar = () => {
  const { menuRef, navRef, handleOpenMenu } = useNav({ styles: styles });
  return (
    <>
      <Box
        as="nav"
        className={styles.hamburger}
        ref={menuRef}
        onClick={handleOpenMenu}
      >
        <BsList size="2.5em" />
      </Box>

      <Box className={styles.container} w="100%" h="75px" ref={navRef}>
        <HStack className={styles.links}>
          <Link href="#home" scroll={false}>
            Home
          </Link>
          <Link href="#projects" scroll={false}>
            Projects
          </Link>
          <Link href="#skills" scroll={false}>
            Skills
          </Link>
        </HStack>

        <HStack gap="35px" className={styles.icons}>
          <Box as="a" target="_blank" href="https://github.com/ndbzika">
            <BsGithub className={styles.icon} size="1.8em" />
          </Box>
          <Box
            as="a"
            target="_blank"
            href="https://www.linkedin.com/in/flaviohenriquedev/"
          >
            <BsLinkedin className={styles.icon} size="1.8em" />
          </Box>
        </HStack>
      </Box>
    </>
  );
};
