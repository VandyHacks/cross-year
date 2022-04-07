import React from "react";

const ShowcaseNavigationButton = ({ committeeName, setTeamName }) => {
	return (
		<div
			className="w-3/4 bg-none h-10 cursor-pointer hover:font-bold"
			onClick={() => setTeamName(committeeName)}
		>
			{committeeName}
		</div>
	);
};

export default ShowcaseNavigationButton;
