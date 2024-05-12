import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Location from "./components/Location";
import GetStarted from "./components/GetStarted";
import Testimonials from "./components/Testimonials";

useState

const App = () => {

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Work/>
    <Location/>
    <GetStarted/>
    <Testimonials/>
    </>
  )
}

export default App 