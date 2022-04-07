import React from "react";
import Image from "next/image";

const MemberCard = ({ memberData }) => {
	const {
		name,
		image = "/members/gray_circle.png",
		role,
		team,
		from,
		year,
		enjoy,
		funFact,
	} = memberData;

	const animateDuration = 200;

	return (
		<div>
			{/* Picture */}
			<div className="group w-[180px] h-[240px] text-center bg-green-100 rounded-3xl shadow-xl overflow-hidden hover:scale-[120%] transition duration-200">
				<Image
					className="group-hover:translate-y-[-240px] transition duration-200"
					src={"/members/gray_circle.png"}
					alt={name}
					width={180}
					height={240}
				/>
				<div className="group-hover:translate-y-[-240px] transition duration-200">
					{role}
				</div>
				<div className="group-hover:translate-y-[-240px] transition duration-200">
					{team}
				</div>
				<div className="group-hover:translate-y-[-240px] transition duration-200">
					{from}
				</div>
				<div className="group-hover:translate-y-[-240px] transition duration-200">
					{year}
				</div>
				<div className="group-hover:translate-y-[-240px] transition duration-200">
					{enjoy}
				</div>
				<div className="group-hover:translate-y-[-240px] transition duration-200">
					{funFact}
				</div>
			</div>
			<div className="w-[180px] whitespace-normal font-bold py-5">
				{name}
			</div>
		</div>
	);
};

export default MemberCard;
