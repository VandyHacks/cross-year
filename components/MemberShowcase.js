/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import ShowcaseNavigation from "./ShowcaseNavigation";
import MemberCard from "./MemberCard";
import jsonList from "../data/members_info.json";

const MemberShowcase = () => {
	// load the member JSON file into a variable
	const memberList = jsonList;
	const [teamName, setTeamName] = useState("All");
	const [teamList, setTeamList] = useState(memberList);
	const memberDescription = {
		All: "All of our VandyHacks committee members!",
		Content:
			"The Content committee produces workshops and many educational material for VandyHacks! ",
		Design: "The Design committee produces all design assets for VandyHacks and directs our image!",
		Development:
			"The Development committee implements all the software and applications that run VandyHacks!",
		"Hacker Experience":
			"The HE committee coordinates and plans hacker-related activities, judging processes, and other events for VandyHacks!",
		Marketing:
			"The Marketing committee handles all marketing and PR for VandyHacks!",
		Operations:
			"The Operations committee organizes, plans, and coordinates in-person events, transportatopn, setup, and more for VandyHacks!",
		Sponsorship:
			"The Sponsorship committee handles all sponsorship for VandyHacks!",
	};

	useEffect(() => {
		const randomList = memberList.sort(() => 0.5 - Math.random());
		const filteredList = randomList.filter(
			(member) => teamName == "All" || member.team.includes(teamName)
		);
		setTeamList(filteredList);
	}, [memberList, teamName]);

	return (
		<div className="my-20 text-center mx-auto w-[90%]">
			<ShowcaseNavigation teamName={teamName} setTeamName={setTeamName} />

			<div className="py-10">{memberDescription[teamName]}</div>

			<div className="gap-y-10 justify-items-center pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
				{teamList.map((member) => (
					<MemberCard memberData={member} />
				))}
			</div>
		</div>
	);
};

export default MemberShowcase;
