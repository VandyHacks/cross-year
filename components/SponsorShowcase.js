import React from "react";
import { SponsorCard } from "./SponsorCard";
import sponsorInfoList from "../data/sponsor_info.json";
export const SponsorShowcase = () => {
	return (
        <div className="gap-x-8 gap-y-8 w-[90vw] md:w-[70vw] mx-auto flex-auto h-100 justify-items-center items-center pt-2 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 ">
			{sponsorInfoList.map((sponsor, index) => (
				<SponsorCard key={index} sponsorData={sponsor} />
			))}
		</div>
	);
};
