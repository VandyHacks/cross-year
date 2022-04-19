import React from "react";
import { WorkshopCard } from "./WorkshopCard";

export const WorkshopShowcase = () => {
  const workshopInfoList = [
    {
      name: "Python",
      description: "Hi this is the description",
      image: "image",
      link: "https://www.youtube.com",
    },
    {
      name: "Python",
      description: "Hi this is the description",
      image: "image",
      link: "https://www.youtube.com",
    },
    {
      name: "Python",
      description: "Hi this is the description",
      image: "image",
      link: "https://www.youtube.com",
    },
    {
      name: "Python",
      description: "Hi this is the description",
      image: "image",
      link: "https://www.youtube.com",
    },
  ];
  return (
    <div className="gap-y-10 w-[90vw] md:w-[70vw] mx-auto justify-items-center pt-5 grid grid-cols-1 lg:grid-cols-2 ">
      {workshopInfoList.map((workshop) => (
        <WorkshopCard workshopData={workshop} />
      ))}
    </div>
  );
};
