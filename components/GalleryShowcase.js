import React from 'react';
import Image from 'next/image';

const GalleryShowcase = () => {
  return (
    <div className="mt-5 rounded-3xl font-bold snap-x mx-auto snap-mandatory h-[250px] md:h-[375px] lg:h-[575px] flex  w-[70vw] md:w-[650px] lg:w-[1000px] scrollbar-hide overflow-scroll relative">
      <div className="snap-start w-full md:w-[650px] lg:w-[1000px] flex-shrink-0 flex items-center justify-center relative">
        <Image
          className="sm:border rounded-3xl"
          layout="fill"
          objectFit="cover"
          alt="VH VIII photo"
          src="/misc/gallery/1.jpg"
        />
      </div>

      <div className="snap-start w-full md:w-[650px] lg:w-[1000px] flex-shrink-0 flex items-center justify-center relative">
        <Image
          className="sm:border rounded-3xl"
          layout="fill"
          objectFit="cover"
          alt="VH VIII photo"
          src="/misc/gallery/2.jpg"
        />
      </div>
      <div className="snap-start w-full md:w-[650px] lg:w-[1000px] flex-shrink-0 flex items-center justify-center relative">
        <Image
          className="sm:border rounded-3xl"
          layout="fill"
          objectFit="cover"
          alt="VH VIII photo"
          src="/misc/gallery/3.jpg"
        />
      </div>
      <div className="snap-start w-full md:w-[650px] lg:w-[1000px] flex-shrink-0 flex items-center justify-center relative">
        <Image
          className="sm:border rounded-3xl"
          layout="fill"
          objectFit="cover"
          alt="VH VIII photo"
          src="/misc/gallery/4.jpg"
        />
      </div>
      <div className="snap-start w-full md:w-[650px] lg:w-[1000px] flex-shrink-0 flex items-center justify-center relative">
        <Image
          className="sm:border rounded-3xl"
          layout="fill"
          objectFit="cover"
          alt="VH VIII photo"
          src="/misc/gallery/5.jpg"
        />
      </div>
      <div className="snap-start w-full md:w-[650px] lg:w-[1000px] flex-shrink-0 flex items-center justify-center relative">
        <Image
          className="sm:border rounded-3xl"
          layout="fill"
          objectFit="cover"
          alt="VH VIII photo"
          src="/misc/gallery/6.jpg"
        />
      </div>
      <div className="snap-start w-full md:w-[650px] lg:w-[1000px] flex-shrink-0 flex items-center justify-center relative">
        <Image
          className="sm:border rounded-3xl"
          layout="fill"
          objectFit="cover"
          alt="VH VIII photo"
          src="/misc/gallery/7.jpg"
        />
      </div>
    </div>
  );
};

export default GalleryShowcase;
