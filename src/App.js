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
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import Pricing from './components/Pricing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Store from './components/Store';
import Cartpage from './components/Cartpage';
import SignPage from './components/SignPage';
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/sign-in" element={<SignPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
