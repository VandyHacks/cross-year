import React from "react";
import Image from "next/image";

const MemberCard = ({ memberData }) => {
	const { name, image, role, team, from, year, enjoy, funFact } = memberData;

	return (
		<div>
			{/* Picture */}
			<div className="text-xs group w-[180px] h-[240px] text-left rounded-3xl shadow-xl overflow-hidden hover:scale-[120%] transition duration-200">
				<Image
					className="group-hover:translate-y-[-240px] transition duration-200 bg-[#28315A]"
					src={"/logos/medium_logo.png"}
					alt={name}
					width={180}
					height={240}
				/>
				<div className="pt-2 px-2 group-hover:translate-y-[-240px] transition duration-200">
					<div className="font-bold inline">Role: </div> {role}
				</div>
				<div className="py-1 px-2 group-hover:translate-y-[-240px] transition duration-200">
					<div className="font-bold inline">Team: </div>
					{team}
				</div>
				<div className="py-1 px-2 group-hover:translate-y-[-240px] transition duration-200">
					<div className="font-bold inline">From: </div>
					{from}
				</div>
				<div className="py-1 px-2 group-hover:translate-y-[-240px] transition duration-200">
					<div className="font-bold inline">Year: </div>
					{year}
				</div>
				<div className="py-1 px-2 group-hover:translate-y-[-240px] transition duration-200">
					{enjoy}
				</div>
				{/* <div className="py-1 px-2 group-hover:translate-y-[-240px] transition duration-200">
					<div className="font-bold inline">Fun fact: </div>
					{funFact}
				</div> */}
			</div>
			<div className="w-[180px] whitespace-normal font-bold py-5">
				{name}
			</div>
		</div>
	);
};

export default MemberCard;
