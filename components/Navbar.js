import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  // TODO Make text color #FBF1BC and underlined when selected
  return (
    <div className="bg-[#28315a] drop-shadow-xl filter shadow-md sticky flex justify-end shadow-sm text-xl px-3  font-semibold text-white">
      <div className="inline-block mr-auto mt-3 w-[40px] h-[40px]">
        <Link href="/">
          <Image
            alt="Logo"
            src="/logos/small_logo.png"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className="text-base m-[20px] hover:underline" id="about">
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </div>
      <div className="text-base m-[20px] hover:underline" id="events">
        <Link href="/events">
          <a>Events</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
