import React from "react";
import Image from "next/image";
import { Button } from "./Button";
export const WorkshopCard = ({ workshopData }) => {
  const { name, description, imgUrl, link } = workshopData;
  return (
    <div className="relative bg-white text-xs  w-[360px] h-[480px] text-left rounded-3xl shadow-xl overflow-hidden hover:scale-[105%] transition duration-200">
      <Image
        className=" transition duration-200 bg-[#28315A]"
        src={imgUrl}
        alt={name}
        width={360}
        height={240}
      />
      {link.length > 0 ? (
        <div className="scale-[80%] text-sm absolute bottom-[0%] right-0 pb-6 pr-1">
          <Button text="See more!" link={link} />
        </div>
      ) : null}
      <div className="pt-2 px-5 transition duration-200">
        <div className="font-bold inline text-bold text-2xl">{name} </div>
      </div>
      <div className="py-1 px-5 overflow-scroll scrollbar-hide">
        <div className="inline text-base">{description}</div>
      </div>
    </div>
  );
};
