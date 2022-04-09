import React from "react";
import BlueOnWhiteBottom from "../public/svgs/blue_on_white_bottom.svg";
import Friends from "../public/misc/friends.jpg";
import Image from "next/image";
export const MobileHappeningNow = () => {
  return (
    <div className="sm:hidden -z-10 absolute top-[40%]  w-full">
      <Image src={Friends} width={600} height={800} />
    </div>
  );
};
