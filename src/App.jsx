import "./App.css";
import React, { useState } from "react";
import Location from "./components/Location";
function App() {
  return (
    <>
    {/* get started now page */}
     <div className="bg-[url('https://storyvord.com/img/lower-production.png')] h-[100vh] w-auto bg-no-repeat bg-cover bg-fixed">
       <div className="">
        <div className=" text-white pt-[20px] md:pt-[70px] lg:absolute  p-8 lg:right-[80px] lg:bottom-[30px] h-auto md:w-[60vw] lg:w-[45vw] 2xl:w-[40vw]">
             <h1 className="text-[25px] sm:text-[45px] font-['Barlow'] font-bold">GET STARTED NOW</h1>
             <br />
             <p className="des text-[18px] sm:text-[20px]">Connect your audience with videos. Traditional barriers to content production, such as high costs, long delivery time, and inefficient performance, are eliminated and replaced with the cloud solution and AI-powered Storyvord.</p>
             <br />
             <p className="des text-[18px] sm:text-[20px]">Do you want to save time and money on your next project?</p>
             <br />
             <button className="des h-auto w-auto bg-gradient-to-r from-[#092579] to-[#25D765]
              sm:py-[14px] sm:px-[22px] py-[5px] px-[4px] rounded-sm font-bold text-[15px] sm:text-[20px]">GET IN TOUCH</button>
        </div>
       </div>
     </div>
     {/* locations */}
     <Location/>
    </>
  );
}

export default App;
