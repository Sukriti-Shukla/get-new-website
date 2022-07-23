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
import { Route, Routes } from 'react-router-dom';
import Hero from './Hero';
import Navbar from './Navbar';
import Features from './Features';
import { Divider } from '@chakra-ui/react';
import Footer from './Footer';
import Stats from './Stats';
import Awards from './Awards';
import Navbar2 from './Navbar2';
import Hero2 from './Hero2';

function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Hero2 />
      <Divider orientation="horizontal" />
      <Stats />
      <Divider orientation="horizontal" />
      <Features />
      <Awards />
      <Footer />
    </ChakraProvider>
  );
}

export default Home;
