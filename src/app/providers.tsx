'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'

import '../../styles/global.scss'

export function Providers({ 
  children 
}: { 
children: React.ReactNode 
}) {
return (
  <CacheProvider>
    <ChakraProvider>
      {children}
    </ChakraProvider>
  </CacheProvider>
)
}