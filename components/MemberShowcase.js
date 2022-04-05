import React, { useState, useEffect } from "react";
import ShowcaseNavigation from "./ShowcaseNavigation";
import MemberCard from "./MemberCard";
import jsonList from "../public/members/members_info.json";

const MemberShowcase = () => {
	// load the member JSON file into a variable
	const memberList = jsonList;
	const [teamName, setTeamName] = useState("All");
	const [teamList, setTeamList] = useState(memberList);

	// useEffect(() => {
	// const tempTeamList = memberList.filter((member) => {
	// 	console.log("THIS IS MEMBER", member);
	// 	member["team"].includes(teamName) || teamName === "All";
	// });
	// setTeamList(tempTeamList);
	// console.log(teamList);
	// }, [teamName]);

	return (
		<div className="my-20 text-center mx-auto w-[90%] bg-pink-200">
			<ShowcaseNavigation teamName={teamName} />

			{/* TODO: loop through memberFiles and populate it */}
			<div className="gap-y-36 justify-items-center pt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
				{teamList.map((member) => (
					// eslint-disable-next-line react/jsx-key
					<MemberCard memberData={member} />
					// eslint-disable-next-line react/jsx-key
					// <p>{member.name}</p>
				))}
			</div>
		</div>
	);
};

export default MemberShowcase;
