import { FC } from "react";

import ProjectCard from "./project-card.component";

import { Projects } from "@/src/models/Projects";



type ProjectProps = {
    projects : Projects[];
}

const  ProjectsDisplayComponent : FC<ProjectProps> =  ({ projects }) =>  {

    return (
        <div id="projects">
            <p className="mt-5 mb-10 text-3xl text-pink-300 text-center ">What I have worked on!</p>
            <div className="grid grid-cols-3 gap-4 ">
                {
                    projects.map( (project) => (
                       <ProjectCard key={project._id} project={project}></ProjectCard>
                    ))
                }
            </div>
        </div>
    );

};

export default ProjectsDisplayComponent;