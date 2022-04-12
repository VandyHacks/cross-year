import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import React from "react";
import HappeningNowEgg from "../public/svgs/happening_now.svg";
import { Button } from "../components/Button";
import { MobileHappeningNow } from "../components/MobileHappeningNow";
import BottomSBlue from "../public/svgs/blue_on_white_bottom.svg";
const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Logo */}
      <div className="mb-[-45.7px] p-0 bg-[#b0cee3] text-[#b0cee3]">h</div>
      <div className="h-[60vh] md:h-[80vh] md:mt-0  bg-center bg-[length:720px_500px] sm:bg-[length:1920px_100%] xl:bg-[length:100%] bg-[url('/svgs/landing_section_one_mobile.svg')] sm:bg-[url('/svgs/landing_section_one.svg')]">
        <div className="mx-auto h-[280px] w-[300px] pt-28 md:w-[342px] md:h-[285px] 3xl:pt-[20vh] 3xl:w-[684px] 3xl:h-[570px] md:pt-32">
          <Image src="/logos/full_logo.png" width={684} height={570} />
        </div>
      </div>

      {/* Happening Now / Current Events */}
      <MobileHappeningNow className="absolute sm:hidden" />
      <BottomSBlue className="-z-10 absolute mt-[-200px] w-full  sm:hidden" />

      <div className="sm:mt-0 mt-72 pt-1 bg-white">
        {/* box here with mobile stuff load if resolution is a certain size */}

        <div className="mt-12 sm:mt-0 font-semibold bg-no-repeat bg-center text-center bg-[url('/svgs/yellow_title.svg')]  leading-4 h-16 text-3xl">
          Happening Now
        </div>
        <div className="block sm:w-[50%] w-0 m-auto">
          <HappeningNowEgg />
        </div>
        <div className="text-center mb-28">
          <p className="font-bold text-lg">October 1 - October 2</p>
          <p className="mb-6 text-base">
            Workshops, speakers, coffee, and friends!
          </p>

          <Button text="VandyHacks VIII" link="https://www.vandyhacks.org" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
