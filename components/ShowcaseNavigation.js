import React from "react";
import ShowcaseNavigationButton from "./ShowcaseNavigationButton";

const ShowcaseNavigation = ({ teamName, setTeamName }) => {
	return (
		<div className="flex justify-center font-medium ">
			<ShowcaseNavigationButton committeeName="All" />
			<ShowcaseNavigationButton committeeName="Content" />
			<ShowcaseNavigationButton committeeName="Design" />
			<ShowcaseNavigationButton committeeName="Development" />
			<ShowcaseNavigationButton committeeName="Hacker Experience" />
			<ShowcaseNavigationButton committeeName="Marketing" />
			<ShowcaseNavigationButton committeeName="Operations" />
			<ShowcaseNavigationButton committeeName="Sponsorship" />
		</div>
	);
};

export default ShowcaseNavigation;
