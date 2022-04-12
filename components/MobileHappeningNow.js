import React from "react";
import BlueOnWhiteBottom from "../public/svgs/blue_on_white_bottom.svg";
import Friends from "../public/misc/friends.jpg";
import Image from "next/image";
export const MobileHappeningNow = () => {
  return (
    <div className="sm:hidden -z-10 absolute top-[40%] w-full h-[600px] bg-cover bg-no-repeat bg-[url('/misc/friends.jpg')]">
      {/* <Image className="contain" src={Friends} width={3648} height={5472} /> */}
      <div className="absolute h-[200px] bg-white -mt-52"></div>
    </div>
  );
};
