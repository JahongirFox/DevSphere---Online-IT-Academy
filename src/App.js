import React from "react";
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Contact } from "./Components/ContactUs/Contact";
import Home from './Container/Home/Home'

function App() {
  return (
    <>
        <Navbar/>
         <Contact/>
         <Home />
        <Footer/>
    </>
  );
}

export default App;
