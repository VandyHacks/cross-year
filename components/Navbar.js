/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CollapsingNav from './CollapsingNav';

const Navbar = () => {
  // TODO Make text color #FBF1BC and underlined when selected
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="sticky pb-4 sm:pb-0 top-0 z-50 bg-[#28315a] border-b-2 border-black drop-shadow-xl filter shadow-md flex justify-start text-xl px-3 md:pr-20 font-semibold text-white">
        <div className="hidden sm:inline-block ml-[8px] sm:ml-[40px] mr-auto mt-3 w-[40px] h-[40px]">
          <Link href="/">
            <Image
              className="hover:cursor-pointer"
              alt="Logo"
              src="/logos/small_logo.png"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div
          className="hidden sm:block text-base m-[20px] hover:underline"
          id="about">
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </div>

        <div
          className="hidden sm:block text-base m-[20px] hover:underline"
          id="workshops">
          <Link href="/workshops">
            <a>Workshops</a>
          </Link>
        </div>
        <div
          className="hidden sm:block text-base m-[20px] hover:underline"
          id="hackathons">
          <Link href="/hackathons">
            <a>Past Hackathons</a>
          </Link>
        </div>
        <div
          className="hidden sm:block text-base m-[20px] hover:underline"
          id="hackathons">
          <Link href="/upcoming">
            <a>Upcoming Hackathons</a>
          </Link>
        </div>
        <CollapsingNav setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      {isOpen ? (
        <div className="z-40 fixed w-full top-16 bg-[#28315a]">
          <div className="md:hidden" id="mobile-menu">
            <a
              href="/"
              className="text-center text-white hover:bg-[#37406c]  block px-3 py-2 rounded-md text-base font-medium">
              {' '}
              Home{' '}
            </a>
            <a
              href="/about"
              className="text-center text-white hover:bg-[#37406c]  block px-3 py-2 rounded-md text-base font-medium">
              {' '}
              About{' '}
            </a>

            <a
              href="/workshops"
              className="text-center text-white hover:bg-[#37406c]  block px-3 py-2 rounded-md text-base font-medium">
              {' '}
              Workshops{' '}
            </a>
            <a
              href="/hackathons"
              className="text-center text-white hover:bg-[#37406c]  block px-3 py-2 rounded-md text-base font-medium">
              {' '}
              Past Hackathons{' '}
            </a>
            <a
              href="/upcoming"
              className="text-center text-white hover:bg-[#37406c]  block px-3 py-2 rounded-md text-base font-medium">
              {' '}
              Upcoming Hackathons{' '}
            </a>
          </div>
        </div>
      ) : null}
      <img
        className="fixed right-3 md:right-10 top-0 w-16 md:w-20 z-50"
        src="/misc/mlh-trust-badge-2024-gray.png"
        alt="Major League Hacking logo"
      />
    </>
  );
};

export default Navbar;
