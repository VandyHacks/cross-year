import React from 'react';
import Image from 'next/image';
export const WorkshopCard = ({ workshopData }) => {
  const { name, description, imgUrl, repoLink, videoLink } = workshopData;
  return (
    <div className="relative bg-white text-xs  w-[360px] h-[520px] text-left rounded-3xl shadow-xl overflow-hidden hover:scale-[105%] transition duration-200">
      <Image
        className=" transition duration-200 bg-[#28315A]"
        src={imgUrl}
        alt={name}
        width={360}
        height={240}
      />
      {repoLink?.length && (
        <a target="_blank" rel="noopener noreferrer" href={repoLink}>
          <div className="scale-[80%] rounded-xl text-lg absolute bottom-2 py-3 px-5 bg-[#28315A] text-white">
            View Repo!
          </div>
        </a>
      )}
      {videoLink?.length && (
        <a target="_blank" rel="noopener noreferrer" href={videoLink}>
          <div className="scale-[80%] rounded-xl text-lg absolute bottom-2 right-1 py-3 px-5 bg-[#28315A] text-white">
            Watch Now!
          </div>
        </a>
      )}
      <div className="pt-2 px-5 transition duration-200">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold inline text-bold text-2xl"
          href={repoLink}>
          {name}
        </a>
      </div>
      <div className="py-1 px-5 overflow-scroll scrollbar-hide">
        <div className="inline text-base">{description}</div>
      </div>
    </div>
  );
};
