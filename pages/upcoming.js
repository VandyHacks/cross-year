import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopBar from '../public/svgs/top_bar_header.svg';
import KeepInTouch from '../components/KeepInTouch';

const Upcoming = () => {
  return (
    <div className="text-[#28315A]">
      <Navbar />

      <div className="pt-12 pb-12 mb-0 bg-[url('/misc/leaves.png')]  bg-no-repeat bg-cover  h-full text-center">
        <div className="text-center text-6xl pb-6 bg-no-repeat bg-bottom bg-[url(/yellow_title.svg)]">
          VH X
        </div>
        <div className="text-2xl">
          October 2023
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-[80%] mx-auto pt-10"></div>
        
        <div className="text-2xl">
          FAQ
        </div>
        <div className="mt-[2rem] text-lg mx-4 leading-7 p-3 md:text-xl md:mx-[4rem] md:leading-9 md:p-6 rounded-3xl">
            <p>
              <b>What is a hackathon?</b><br/>
              Hackathons are events where students across the country come together for a weekend of innovation and creativity. Participants at VandyHacks have 36 hours to create anything that shows off their creativity and passion! You may choose any platform, programming language, or format to show off to our judges - you can even present a storyboard or an idea! At VandyHacks, there's no end to the possibilities.
            </p><br/>
            <p>
                <b>How do I register?</b><br/>
                When applications are open, you will be able to sign in to apply.vandyhacks.org, or click our application button. You'll be able to check the status of your application on the registration portal as well.
            </p><br/>
            <p>
              <b>When is the registration deadline?</b><br/>
              More details on registration will be out soon! We anticipate registration to start in mid-August and close in early October. Travel reimbursement applications will likely be due early September.
            </p><br/>
            <p>
              <b>What if I've never been to a hackathon?</b><br/>
              Not to worry! A few days before the event, you'll receive an email with a link to our hacker guide, which will contain all the information you need. During the event, our team will be available to answer any questions. As always, feel free to email us at info@vandyhacks.org if you have any questions!
            </p><br/>
          </div>

        
      </div>
      <TopBar className="fill-[#B0CEE3]" />
      <KeepInTouch />
      <Footer />
    </div>
  );
};

export default Upcoming;