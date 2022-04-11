import React from "react";

const ShowcaseNavigationButton = ({
	committeeName,
	setTeamName,
	handleClick = () => {},
}) => {
	return (
		<div
			className="cursor-pointer hover:font-bold select-none"
			onClick={() => {
				setTeamName(committeeName);
				handleClick();
			}}
		>
			{committeeName}
		</div>
	);
};

export default ShowcaseNavigationButton;
