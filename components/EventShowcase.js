import React from "react";
import Image from "next/image";

const EventShowcase = () => {
  return (
    <div className="mt-5 border  rounded-3xl font-bold snap-x mx-auto snap-mandatory h-[250px] md:h-[375px] lg:h-[575px] flex  w-[70vw] md:w-[650px] lg:w-[1000px] scrollbar-hide overflow-scroll relative">
      <div className="snap-start w-full md:w-[650px] lg:w-[1000px] flex-shrink-0 flex items-center justify-center relative">
        <Image
          className="sm:border rounded-3xl"
          layout="fill"
          objectFit="cover"
          alt="VH8 website"
          src="/misc/vh_viii.png"
        />
        <div className="absolute backdrop-blur-sm bg-white/[15%] py-5 w-full bottom-0">
          <a
            target="_blank"
            href="https://vandyhacks.org/"
            rel="noopener noreferrer"
            className="hover:cursor-pointer text-white font-sans text-lg lg:text-3xl"
          >
            Click Here To Visit VH Space Edition
          </a>
        </div>
      </div>

      <div className="snap-start w-full md:w-[650px] lg:w-[1000px] flex-shrink-0 flex items-center justify-center relative">
        <Image
          className="sm:border rounded-3xl"
          layout="fill"
          objectFit="cover"
          alt="VH7 website"
          src="/misc/vh_vii.png"
        />
        <div className="absolute backdrop-blur-sm bg-white/[15%] py-5 w-full bottom-0">
          <a
            target="_blank"
            href="https://vii.vandyhacks.org/"
            rel="noopener noreferrer"
            className="hover:cursor-pointer text-[#691335] font-mono text-lg lg:text-3xl"
          >
            Click Here To Visit VH Squirrel Edition
          </a>
        </div>
      </div>
      <div className="snap-start w-full md:w-[650px] lg:w-[1000px] flex-shrink-0 flex items-center justify-center relative">
        <Image
          className="sm:border rounded-3xl"
          layout="fill"
          objectFit="cover"
          alt="VH7 website"
          src="/misc/vh_vi.png"
        />
        <div className="absolute text-3xl backdrop-blur-sm bg-[#1C53A0]/[5%] py-5 w-full bottom-0">
          <a
            target="_blank"
            href="https://vi.vandyhacks.org/"
            rel="noopener noreferrer"
            className="hover:cursor-pointer text-[#1C53A0] font-mono text-lg lg:text-3xl"
          >
            Click Here To Visit VH Art Edition
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventShowcase;
