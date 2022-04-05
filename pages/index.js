import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import React from "react";
import { Button } from "../components/Button";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Logo */}
      <div className="h-[100vh] -mt-12 md:mt-0 bg-[url('/svgs/landing_section_one.svg')]">
        <div className="mx-auto h-[200px] w-[250px] pt-64 md:w-[342px] md:h-[285px] md:pt-32">
          <Image src="/logos/full_logo.png" width={342} height={285} />
        </div>
      </div>
      <div>
        <br />
        <br />
        <div className=" bg-no-repeat bg-center text-center bg-[url('/svgs/yellow_title.svg')] leading-4 h-16 text-3xl">
          Happening Now
        </div>
        <div>
          <object
            className="block w-[50%] m-auto"
            type="image/svg+xml"
            data="/svgs/happening_now.svg"
          ></object>
        </div>
        <div className="text-center">
          <p>October 1 - 2</p>
          <p className="mb-6">Workshops, speakers, coffee, and friends!</p>

          <Button text="VandyHacks VIII" link="https://www.vandyhacks.org" />
        </div>

        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
