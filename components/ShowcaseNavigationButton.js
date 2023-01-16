import React from 'react';

const ShowcaseNavigationButton = ({
  committeeName,
  setTeamName,
  teamName,
  handleClick = () => {},
}) => {
  return (
    <div
      className={`text-base md:text-lg  cursor-pointer hover:font-bold select-none ${
        committeeName === teamName
          ? 'font-bold underline underline-offset-1'
          : ''
      }`}
      onClick={() => {
        setTeamName(committeeName);
        handleClick();
      }}>
      {committeeName}
    </div>
  );
};

export default ShowcaseNavigationButton;
