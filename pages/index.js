/* eslint-disable @next/next/no-img-element */
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
import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import KeepInTouch from "../components/KeepInTouch";
import { SponsorShowcase } from "../components/SponsorShowcase";
const Home = () => {
  return (
    <div className="text-[#28315A]">
      <Navbar />

      {/* Logo */}
      {/* This dummy div removes white space from the top */}
      <div className="mb-[-45.7px] p-5 bg-[#b0cee3] text-[#b0cee3] text-transparent">
        h
      </div>
      <div className="h-[60vh] md:h-[80vh] md:mt-0  bg-center bg-[length:720px_500px] sm:bg-[length:1920px_100%] 3xl:bg-[length:2500px_100%] bg-[url('/svgs/landing_section_one_mobile.svg')] sm:bg-[url('/svgs/landing_section_one.svg')]">
        <div className="mx-auto h-[280px] w-[300px] pt-28 md:w-[342px] md:h-[285px] 3xl:pt-[20vh] 3xl:w-[684px] 3xl:h-[570px] md:pt-32">
          <Image
            alt="VandyHacks Logo"
            src="/logos/full_logo.png"
            width={684}
            height={570}
          />
        </div>
      </div>

      {/* Happening Now / Current Events */}
      <MobileHappeningNow className=" md:hidden" />

      <BottomSBlue className="-z-10 absolute mt-[-280px] w-full  sm:hidden" />

      <div className="z-10 sm:mt-0 mt-96 1sm:mt-96 md:mt-0 pt-1 bg-white">
        {/* box here with mobile stuff load if resolution is a certain size */}

        <div className="w-[70%] sm:w-[100%] mx-auto sm:mt-0 font-semibold bg-no-repeat bg-center text-center bg-[url('/svgs/yellow_title.svg')]  leading-4 h-16 text-2xl sm:text-3xl">
          Coming Soon
        </div>
        <div className="block sm:w-[50%] w-0 m-auto">
          <HappeningNowEgg />
        </div>
        <div className="text-center mb-28 w-[80%] md:w-[70%] lg:w-[50%] mx-auto">
          <p className="font-bold text-lg">VandyHacks IX</p>
          <p className="m-4 text-base bold italic">
            October 21 - October 23, 2022
          </p>
          <p>
            Mark your calendar! VandyHacks IX Hackathon is happening this
            October, 2022!
          </p>
          <p>
            This hackathon will be <b>fully in-person</b>, and we have prepared
            plethora of workshops and events to help you get started even if it
            is your first Hackathon event!
          </p>

          {/* <Button
						text="VandyHacks IX"
						link="https://www.vandyhacks.org"
					/> */}
        </div>
      </div>

      {/* sponsors */}
      <div className="z-10 w-[100%]">
        <img
          alt="squiggly lines"
          className="contain length -mb-[5px]"
          src="/svgs/landing_section_three_top.svg"
        />
        <div className="w-[100%] bg-[#fbf1bc]">
          <div className="w-[70%] sm:w-[100%] mx-auto font-semibold bg-no-repeat bg-center text-center bg-[url('/svgs/blue_title.svg')]  leading-4 h-16 text-2xl sm:text-3xl">
            Past Sponsors
          </div>
          <br />
          <SponsorShowcase />
          <br />
          <div className="text-center">
            <p className="m-6 text-base font-semibold">
              Companies and organizations behind VandyHacks.
            </p>
            <Button text="Sponsor Us" link="mailto:sponsor@vandyhacks.org" />
          </div>
        </div>
        <div className="-mt-5 bg-[url('/svgs/landing_section_three_bottom.svg')] bg-center bg-no-repeat h-[20vh] bg-[length:820px_100%] sm:bg-[length:100%]"></div>
      </div>
      <KeepInTouch />
      <Footer />
    </div>
  );
};

export default Home;
