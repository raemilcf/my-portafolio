import { FC, useContext } from "react";

import ProjectCard from "./project-card.component";

import { Projects } from "@/src/models/Projects";
import { ProjectContext } from "@/src/context/project.context";


const  ProjectsDisplayComponent = () =>  {
    const { projects } = useContext(ProjectContext);

    return (
        <div id="projects"  className=" pt-20 mt-20">
            <p className="mb-16 text-3xl text-pink-300 text-center ">What I have worked on!</p>
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