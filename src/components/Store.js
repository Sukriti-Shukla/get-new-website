import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';
import Pricing from './Pricing';
import Experience from './Experience';
import StoreHero from './StoreHero';

function Store() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <StoreHero />
      <Pricing />
      <Experience />
      <Footer />
    </ChakraProvider>
  );
}

export default Store;
