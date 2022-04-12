import React, { useState } from "react";
import ShowcaseNavigationButton from "./ShowcaseNavigationButton";

const ShowcaseNavigation = ({ teamName, setTeamName }) => {
  const [active, setActive] = useState(false);
  const teamDescription = [
    "All",
    "Content",
    "Design",
    "Development",
    "Hacker Experience",
    "Marketing",
    "Operations",
    "Sponsorship",
  ];

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
              {teamDescription.map((team) => (
                <ShowcaseNavigationButton
                  committeeName={team}
                  teamName={teamName}
                  setTeamName={setTeamName}
                  handleClick={handleClick}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <div
        className={`${
          active ? "" : "hidden"
        } hidden md:flex md:flex-row w-full justify-center md:space-x-4 lg:space-x-10`}
      >
        {teamDescription.map((team) => (
          <ShowcaseNavigationButton
            teamName={teamName}
            committeeName={team}
            setTeamName={setTeamName}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowcaseNavigation;
