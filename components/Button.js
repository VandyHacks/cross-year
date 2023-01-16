import React from 'react';
import Link from 'next/link';
export const Button = ({ text, link }) => {
  return (
    <div className="font-inter bg-[#28315a] pl-5 pr-5 pb-4 pt-4 inline text-white border-0 rounded-lg m-auto shadow-inner drop-shadow-xl filter cursor-pointer">
      <Link target="_blank" href={link}>
        <a target="_blank">{text}</a>
      </Link>
    </div>
  );
};
