import React, { useState } from "react";
import ShowcaseNavigationButton from "./ShowcaseNavigationButton";

const ShowcaseNavigation = ({ teamName, setTeamName }) => {
	const [active, setActive] = useState(false);

	const handleClick = () => setActive(!active);

	return (
		<div className="">
			<div className="md:hidden">
				<div className="cursor-pointer rounded-md border border-gray-300 shadow-sm select-none py-1">
					<div onClick={handleClick}>
						{teamName}
						<div className="absolute inline right-12">
							<svg
								className="-mr-1 ml-2 h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
					</div>
					{active ? (
						<div className="py-2 space-y-1">
							<ShowcaseNavigationButton
								committeeName="All"
								setTeamName={setTeamName}
								handleClick={handleClick}
							/>
							<ShowcaseNavigationButton
								committeeName="Content"
								setTeamName={setTeamName}
								handleClick={handleClick}
							/>
							<ShowcaseNavigationButton
								committeeName="Design"
								setTeamName={setTeamName}
								handleClick={handleClick}
							/>
							<ShowcaseNavigationButton
								committeeName="Development"
								setTeamName={setTeamName}
								handleClick={handleClick}
							/>
							<ShowcaseNavigationButton
								committeeName="Hacker Experience"
								setTeamName={setTeamName}
								handleClick={handleClick}
							/>
							<ShowcaseNavigationButton
								committeeName="Marketing"
								setTeamName={setTeamName}
								handleClick={handleClick}
							/>
							<ShowcaseNavigationButton
								committeeName="Operations"
								setTeamName={setTeamName}
								handleClick={handleClick}
							/>
							<ShowcaseNavigationButton
								committeeName="Sponsorship"
								setTeamName={setTeamName}
								handleClick={handleClick}
							/>
						</div>
					) : null}
				</div>
			</div>
			<div
				className={`${
					active ? "" : "hidden"
				} hidden md:flex md:flex-row w-full justify-center md:space-x-4 lg:space-x-10`}
			>
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
		</div>
	);
};

export default ShowcaseNavigation;
