import React from "react";
import Footer from "../components/Footer";
import KeepInTouch from "../components/KeepInTouch";
import Navbar from "../components/Navbar";
import { WorkshopShowcase } from "../components/WorkshopShowcase";

const Workshops = () => {
  return (
    <div className="text-[#28315A]">
      <Navbar />
      <div className="pt-12 pb-12 mb-0 bg-no-repeat bg-cover  h-full text-center">
        <div className="text-6xl py-5">Past Workshops</div>
        <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-[80%] mx-auto pt-10"></div>
        <div className="text-2xl">
          Swipe below to see our past hackathon websites!
        </div>
        <WorkshopShowcase />
      </div>
      <KeepInTouch />
      <Footer />
    </div>
  );
};

export default Workshops;
