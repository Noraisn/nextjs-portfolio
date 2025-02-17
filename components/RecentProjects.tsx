import { projects } from "@/data";
import React from "react";

export const RecentProjects = () => {
  return (
    <div className="py-20 ">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-16 p-4 mt-10 ">
        {projects.map((project) => (
          <div>
            {project.title}
          </div>
        ))}
      </div>
    </div>
  );
};
