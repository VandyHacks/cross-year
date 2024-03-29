import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutEgg from '../public/svgs/about_egg.svg';
import TopBar from '../public/svgs/top_bar_header.svg';
import EventShowcase from '../components/EventShowcase';
import GalleryShowcase from '../components/GalleryShowcase';
import KeepInTouch from '../components/KeepInTouch';

const Hackathons = () => {
  return (
    <div className="text-[#28315A]">
      <Navbar />

      <div className="pt-12 pb-12 mb-0 bg-[url('/misc/leaves.png')]  bg-no-repeat bg-cover  h-full text-center">
        <div className="text-center text-6xl pb-6 bg-no-repeat bg-bottom bg-[url(/yellow_title.svg)]">
          Past VH
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-[80%] mx-auto pt-10"></div>
        <div className="text-2xl">
          Swipe below to see promotional websites for past VandyHacks!
        </div>
        <EventShowcase />

        <div className="mt-10 text-2xl">Swipe to see VH in action!</div>
        <GalleryShowcase />
      </div>
      <TopBar className="fill-[#B0CEE3]" />
      <KeepInTouch />
      <Footer />
    </div>
  );
};

export default Hackathons;
