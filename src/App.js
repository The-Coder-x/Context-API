import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/cart" Component={Cart} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
