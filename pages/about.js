import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import AboutEgg from "../public/svgs/about_egg.svg";
import TopBar from "../public/svgs/top_bar_header.svg";
import MemberShowcase from "../components/MemberShowcase";
import KeepInTouch from "../components/KeepInTouch";

const About = () => {
  return (
    <div className="text-[#28315A]">
      <Navbar />

      <div className="h-full flex flex-col-reverse md:flex-row items-center  bg-contain bg-center bg-[url(/misc/leaves.png)]">
        <div className="md:w-[55%] mx-auto ">
          <div className="text-center text-6xl pb-6 bg-no-repeat bg-bottom bg-[url(/yellow_title.svg)]">
            About
          </div>
          {/* md:bg-[#28315A]/[0.1] */}
          <div className="mt-[2rem] text-lg mx-4 leading-7 p-3 md:text-xl md:mx-[4rem] md:leading-9 md:p-6 rounded-3xl">
            <p>
              We are an organization dedicated to fostering hacker culture and
              building a computer science community at Vanderbilt University! We
              accomplish this by hosting an annual hackathon - a 36-hour
              software development marathon during which attendees think of an
              idea and build it - alongside regular hack nights, study
              nights, and many other fun events!
            </p>
          </div>
        </div>
        <div className="mx-auto w-[100%] h-[100%] md:w-[45%] relative center">
          <AboutEgg />
        </div>
      </div>

      <TopBar className="fill-[#B0CEE3]" />

      <div className="h-full text-center">
        <div className="text-6xl py-5">Meet the Board</div>
        <div className="">
          <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-[80%] mx-auto pt-10">
            <Image
              className="rounded-[75px] object-cover md:w-[40%] max-w-6xl"
              src="/misc/meet_the_board.jpeg"
              alt="VandyHacks Org"
              width={750}
              height={500}
            />
            <div className="text-2xl text-left font-normal pt-10 md:pt-0 md:pl-20 leading-10 w-[80%] md:w-[60%]">
              <p>
                The VandyHacks Board consists of 7 committees and 
                around 60 organizers who are committed to creating 
                learning experiences that are accessible
                and applicable to all. Meet the team below!
              </p>
            </div>
          </div>
        </div>
      </div>

      <MemberShowcase />
      <KeepInTouch />
      <Footer />
    </div>
  );
};

export default About;
