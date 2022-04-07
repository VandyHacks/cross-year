import React from "react";
import ShowcaseNavigationButton from "./ShowcaseNavigationButton";

const ShowcaseNavigation = ({ teamName, setTeamName }) => {
	return (
		<div className="flex justify-center font-medium overflow-x-auto">
			<ShowcaseNavigationButton
				committeeName="All"
				setTeamName={setTeamName}
			/>
			<ShowcaseNavigationButton
				committeeName="Content"
				setTeamName={setTeamName}
			/>
			<ShowcaseNavigationButton
				committeeName="Design"
				setTeamName={setTeamName}
			/>
			<ShowcaseNavigationButton
				committeeName="Development"
				setTeamName={setTeamName}
			/>
			<ShowcaseNavigationButton
				committeeName="Hacker Experience"
				setTeamName={setTeamName}
			/>
			<ShowcaseNavigationButton
				committeeName="Marketing"
				setTeamName={setTeamName}
			/>
			<ShowcaseNavigationButton
				committeeName="Operations"
				setTeamName={setTeamName}
			/>
			<ShowcaseNavigationButton
				committeeName="Sponsorship"
				setTeamName={setTeamName}
			/>
		</div>
	);
};

export default ShowcaseNavigation;
