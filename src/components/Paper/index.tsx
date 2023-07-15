'use client'

import { Box, Tooltip } from '@chakra-ui/react';
import Image from 'next/image';

type PaperProps = {
  name: string;
  image: string;
}

export const Paper = ({ name = 'Tecnology', image = '/' }: PaperProps) => {
  return (
    <Tooltip label={name}>
      <Box>
        <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        />
      </Box>
    </Tooltip>
  )
}
