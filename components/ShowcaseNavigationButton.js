import React from "react";

const ShowcaseNavigationButton = ({ committeeName }) => {
	return (
		<div className="w-3/4 bg-none h-10 cursor-pointer flex justify-around hover:font-bold ">
			{committeeName}
		</div>
	);
};

export default ShowcaseNavigationButton;
