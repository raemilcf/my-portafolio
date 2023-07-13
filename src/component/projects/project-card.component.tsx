import { Projects } from "@/src/models/Projects";
import { FC } from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";


type ProjectProps = {
    project : Projects;
}

const  ProjectCard : FC<ProjectProps> =  ({ project }) =>  {


    return (
         //flex flex-col justify-between to get the footer effect, same as flex-row for the navbar separation
        <div key={project._id} className="flex flex-col justify-between p-8 border-2 border-transparent 
         rounded-md bg-cyan-950
         gap-3 hover:scale-105 ">

            <div>
                {/* show folder icon and github and open page  */}
                <div className="flex flex-row justify-between mb-5 ">
                    <Image
                    src="/folder.svg"
                    alt={project.title}
                    width={38}
                    height={38}
                    />
                    <div className="flex flex-row gap-3">
                        {
                            project.github ? 
                            <a href={project.github} target="_blank" className="mt-4" >
                                <Image
                                    src="/github.svg"
                                    alt={project.title}
                                    width={20}
                                    height={20}
                                />
                            </a> : <span></span>
                        }
                        {
                            project.url ? 
                            <a href={project.github} target="_blank" className="mt-4">
                                <Image
                                    src="/external-link.svg"
                                    alt={project.title}
                                    width={20}
                                    height={20}
                                />
                            </a> : <span></span>
                        }
                    </div>
                </div>

                {/* title */}
                {
                    project.url ? 
                    <a  href={project.url} target="_blank" className="text-lg hover:text-pink-300">
                        {project.title}
                    </a> : 
                    <p  className="text-lg ">
                        {project.title}
                    </p> 
                }

                {/* description  */}
                <div className="tracking-wide mt-4"> 
                    <PortableText value={project.description}></PortableText>
                </div>
            </div> 

            {/* tech used for the project  */}
            <div className="grid grid-cols-4 gap-2  mt-4 mb-0">
                {
                    project.technologies.map( (tech) =>(
                        <p key={tech} className="text-xs text-pink-300">
                            {tech}
                        </p>
                    )) 
                }
            </div>
        </div>
    );
}

export default ProjectCard;