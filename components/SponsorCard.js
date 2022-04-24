import React from "react";
import Image from "next/image";
import { Button } from "./Button";
export const SponsorCard = ({ sponsorData }) => {
	const { name, imgUrl, link } = sponsorData;
	return (
        <div className="relative w-auto h-auto object-cover content-center transition1 duration-200">
            <a
                className="relative"
                backgroundColor="transparent"
                src={imgUrl}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            ><img className="relative object-contain max-h-20 transition duration-300 hover:scale-125" src={imgUrl} alt={name} /></a>
		</div>
	);
};
