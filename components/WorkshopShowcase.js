import React from "react";
import { WorkshopCard } from "./WorkshopCard";
import workshopInfoList from "../data/workshops_info.json";
export const WorkshopShowcase = () => {
  return (
    <div className="gap-y-10 w-[90vw] md:w-[70vw] mx-auto justify-items-center pt-5 grid grid-cols-1 lg:grid-cols-2 ">
      {workshopInfoList.map((workshop) => (
        <WorkshopCard workshopData={workshop} />
      ))}
    </div>
  );
};
