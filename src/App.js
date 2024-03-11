import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import GoToTop from './Components/GoToTop';
import Game from './Components/Game';
import Home from './Components/Home';
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className='App'>

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/game" element={<Game />} />
          </Routes>


          <GoToTop />
          <Footer />



        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
