import React, { useRef } from 'react';
import Image from 'next/image';

const EventShowcase = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -current.offsetWidth, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: current.offsetWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-5 rounded-3xl font-bold snap-x mx-auto snap-mandatory h-[250px] md:h-[375px] lg:h-[575px] flex  w-[70vw] md:w-[650px] lg:w-[1000px] scrollbar-hide overflow-scroll relative">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 z-10 flex items-center justify-center h-24 w-12 cursor-pointer bg-black/[15%] rounded-md transform -translate-y-1/2"
        style={{ marginLeft: '1rem' }}
      >
        <svg className="text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="flex snap-x snap-mandatory overflow-scroll scrollbar-hide h-full" ref={scrollRef}>
        <div className="snap-start w-full md:w-[650px] lg:w-[1000px] flex-shrink-0 flex items-center justify-center relative">
          <Image
            className="sm:border rounded-3xl"
            layout="fill"
            objectFit="cover"
            alt="VH10 website"
            src="/misc/vh_x.png"
          />
          <div className="absolute backdrop-blur-sm bg-white/[15%] py-5 w-full bottom-0">
            <a
              target="_blank"
              href="https://x.vandyhacks.org/"
              rel="noopener noreferrer"
              className="hover:cursor-pointer text-[#FFFFFF] font-mono text-lg lg:text-3xl">
              Click Here To Visit VH X (Neon Edition)
            </a>
          </div>
        </div>

        <div className="snap-start w-full md:w-[650px] lg:w-[1000px] flex-shrink-0 flex items-center justify-center relative">
          <Image
            className="sm:border rounded-3xl"
            layout="fill"
            objectFit="cover"
            alt="VH9 website"
            src="/misc/vh_ix.png"
          />
          <div className="absolute backdrop-blur-sm bg-white/[15%] py-5 w-full bottom-0">
            <a
              target="_blank"
              href="https://ix.vandyhacks.org/"
              rel="noopener noreferrer"
              className="hover:cursor-pointer text-[#691335] font-mono text-lg lg:text-3xl">
              Click Here To Visit VH IX (Ocean Edition)
            </a>
          </div>
        </div>

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
              href="https://viii.vandyhacks.org/"
              rel="noopener noreferrer"
              className="hover:cursor-pointer text-white font-mono text-lg lg:text-3xl">
              Click Here To Visit VH VIII (Space Edition)
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
              className="hover:cursor-pointer text-[#691335] font-mono text-lg lg:text-3xl">
              Click Here To Visit VH VII (Retro Edition)
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
              className="hover:cursor-pointer text-[#1C53A0] font-mono text-lg lg:text-3xl">
              Click Here To Visit VH VI (Art Edition)
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 z-10 flex items-center justify-center h-24 w-12 cursor-pointer bg-black/[15%] rounded-md transform -translate-y-1/2"
        style={{ marginRight: '1rem' }}
      >
        <svg className="text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default EventShowcase;
