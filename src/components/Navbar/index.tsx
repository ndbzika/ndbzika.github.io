'use client'

import { Box, HStack } from '@chakra-ui/react'
import {BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import Link from 'next/link'

import styles from './styles.module.scss'

export const Navbar = () => {
  return (
    <Box className={styles.container} w='100%' h='75px'>

      <HStack className={styles.links}>
        <Link href='/#home' scroll={false}>Home</Link>

        <Link href='/#projects' scroll={false}>Projects</Link>

        <Link href='/#skills' scroll={false}>Skills</Link>
      </HStack>

      <HStack gap='35px'>
        <BsGithub className={styles.icon} size='1.8em' />
        <BsLinkedin className={styles.icon} size='1.8em' />
      </HStack>


    </Box>
  )
}