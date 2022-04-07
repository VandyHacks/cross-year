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

	return (
		<div className="w-[180px] h-[240px] bg-green-100 rounded-3xl shadow-xl">
			{/* Picture */}
			<Image
				src={"/members/gray_circle.png"}
				alt={name}
				width={180}
				height={240}
			/>
			<div>{name}</div>
			<div>{team}</div>
			<div>{from}</div>
		</div>
	);
};

export default MemberCard;
