import React from "react";
import SectionTitle from "./SectionTitle";
import WorkItem from "./WorkItem";
import Workstuff from "../data/Workstuff";

const Works = () => {
  return (
    <div className="py-12">
      <SectionTitle id="works">Recent Works</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {Workstuff.map((work) => (
          <WorkItem
            key={work.title}
            imgUrl={work.imgUrl}
            title={work.title}
            tech={work.tech}
            workUrl={work.workUrl}></WorkItem>
        ))}
      </div>
    </div>
  );
};

export default Works;
