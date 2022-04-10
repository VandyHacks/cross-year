/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import ShowcaseNavigation from "./ShowcaseNavigation";
import MemberCard from "./MemberCard";
import jsonList from "../public/members/members_info.json";

const MemberShowcase = () => {
	// load the member JSON file into a variable
	const memberList = jsonList;
	const [teamName, setTeamName] = useState("All");
	const [teamList, setTeamList] = useState(memberList);

	useEffect(() => {
		const randomList = memberList.sort(() => 0.5 - Math.random());
		const filteredList = randomList.filter(
			(member) => teamName == "All" || member.team.includes(teamName)
		);
		setTeamList(filteredList);
	}, [memberList, teamName]);

	return (
		<div className="my-20 text-center mx-auto w-[90%]">
			<ShowcaseNavigation setTeamName={setTeamName} />

			<p>{teamName}</p>
			{/* Add committee description */}

			<div className="gap-y-10 justify-items-center pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
				{teamList.map((member) => (
					<MemberCard memberData={member} />
				))}
			</div>
		</div>
	);
};

export default MemberShowcase;
