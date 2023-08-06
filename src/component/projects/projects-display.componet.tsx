import { FC, useContext } from "react";

import ProjectCard from "./project-card.component";

import { Projects } from "@/src/models/Projects";
import { ProjectContext } from "@/src/context/project.context";


const  ProjectsDisplayComponent = () =>  {
    const { projects } = useContext(ProjectContext);

    return (
        <div id="projects"  className="pt-10 mt-10 lg:pt-20 lg:mt-20">
            <p className="mb-8 text-lg text-pink-300 text-center 
                         lg:mb-16 lg:text-3xl">
                            What I have worked on!</p>
            <div className="grid lg:grid-cols-2 lg:gap-2 xl:grid-cols-3 xl:gap-4 ">
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