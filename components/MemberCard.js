import React from 'react';
import Image from 'next/image';

const MemberCard = ({ memberData }) => {
  const { name, image, role, committee, from, year, enjoy, funfact, website } =
    memberData;

  return (
    <div>
      {/* Picture */}
      <div className="text-xs group w-[180px] h-[240px] text-left rounded-3xl shadow-xl overflow-hidden hover:scale-[120%] transition duration-200">
        <Image
          className="group-hover:translate-y-[-240px] transition duration-200 bg-[#28315A]"
          src={`/${image}`}
          alt={name}
          width={180}
          height={240}
        />
        <div className="overflow-y-auto group-hover:translate-y-[-240px] transition duration-200">
          <div className="pt-2 px-1">
            <div className="font-bold inline">Role: </div>
            {committee} {role}
          </div>
          <div className="py-[0.5px] px-1">
            <div className="font-bold inline">From: </div>
            {from}
          </div>
          <div className="py-[0.5px] px-1">
            <div className="font-bold inline">Year: </div>
            {year}
          </div>
          <div className="py-[0.5px] px-1">
            <div className="font-bold inline">Why VH: </div>
            {enjoy}
          </div>
          <div className="py-[0.5px] px-1">
            <div className="font-bold inline">Fun fact: </div>
            {funfact}
          </div>
        </div>
      </div>
      <div className="w-[180px] whitespace-normal font-bold py-5">
        <a href={website} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </div>
    </div>
  );
};

export default MemberCard;
