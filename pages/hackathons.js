import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutEgg from "../public/svgs/about_egg.svg";
import TopBar from "../public/svgs/top_bar_header.svg";
import EventShowcase from "../components/EventShowcase";

const events = () => {
  return (
    <div className="text-[#28315A]">
      <Navbar />

      <div className="pt-12 pb-12 mb-0 bg-[url('/misc/leaves.png')]  bg-no-repeat bg-cover  h-full text-center">
        <div className="text-6xl py-5">Past Hackathons</div>
        <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-[80%] mx-auto pt-10"></div>
        <div className="text-2xl">
          Swipe below to see our past hackathon websites!
        </div>
        <EventShowcase />
      </div>
      <TopBar className="fill-[#B0CEE3]" />

      <Footer />
    </div>
  );
};

export default events;
