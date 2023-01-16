import React from 'react';
import Footer from '../components/Footer';
import KeepInTouch from '../components/KeepInTouch';
import Navbar from '../components/Navbar';
import { WorkshopShowcase } from '../components/WorkshopShowcase';

const Workshops = () => {
  return (
    <div className="text-[#28315A]">
      <Navbar />
      <div className="pt-36 pb-96 h-[50vh] md:h-[100vh] bg-center md:bg-left-top mb-0 bg-[url('/misc/workshopBack.png')] bg-no-repeat bg-cover md:bg-[length:100%_70%] lg:bg-[length:100%_80%] text-center">
        <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-[80%] mx-auto pt-10"></div>

        <div className="hidden text-2xl">
          Swipe below to see our past hackathon websites!
        </div>
      </div>
      <WorkshopShowcase className="" />
      <KeepInTouch />
      <Footer />
    </div>
  );
};

export default Workshops;
