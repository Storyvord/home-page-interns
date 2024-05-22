import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Location from "./components/Location";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";

const App = () => {
  return (
      <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <GetStarted/>
      <Location/>
      <Testimonials/>
      <Footer/>  
    </>
  )
}

export default App