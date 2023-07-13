import { Projects } from "@/src/models/Projects";
import { PortableText } from "@portabletext/react";
import { FC } from "react";
import ProjectCard from "./project-card.component";


type ProjectProps = {
    projects : Projects[];
}

const  ProjectsDisplay : FC<ProjectProps> =  ({ projects }) =>  {

    return (
        <div id="projects" className="px-10">
            <p className="mt-5 mb-10 text-3xl text-pink-300  ">What I have worked on!</p>
            <div className="grid grid-cols-3  gap-4 ">
                {
                    projects.map( (project) => (
                       <ProjectCard key={project._id} project={project}></ProjectCard>
                    ))
                }
            </div>
        </div>
    );

};

export default ProjectsDisplay;