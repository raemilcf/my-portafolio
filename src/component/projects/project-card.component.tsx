import { FC } from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { Projects } from "@/src/models/Projects";



type ProjectProps = {
    project : Projects;
}

const  ProjectCardComponent : FC<ProjectProps> =  ({ project }) =>  {


    return (
         //flex flex-col justify-between to get the footer effect, same as flex-row for the navbar separation
        <div key={project._id} className="flex flex-col justify-between p-8 border-2 mb-10
                                        border-transparent rounded-md bg-cyan-950
                                        gap-3 hover:scale-105 lg:mb-0 ">

            <div>
                {/* show folder icon and github and open page  */}
                <div className="flex flex-row justify-between mb-5 ">
                    <Image
                    src="/folder.svg"
                    alt={project.title}
                    width={38}
                    height={38}
                    className=" w-7 lg:w-10"
                    />
                    <div className="flex flex-row gap-3">
                        {
                            project.github &&
                           ( <a href={project.github} target="_blank" className="mt-4" >
                                <Image
                                    src="/github.svg"
                                    alt={project.title}
                                    width={20}
                                    height={20}
                                    className=" w-4 lg:w-5"
                                />
                            </a> ) 
                        }
                        {
                            project.url &&
                            (<a href={project.url} target="_blank" className="mt-4">
                                <Image
                                    src="/external-link.svg"
                                    alt={project.title}
                                    width={20}
                                    height={20}
                                    className=" w-4 lg:w-5"
                                />
                            </a> )
                        }
                    </div>
                </div>

                {/* title */}
                {
                    project.url ? 
                    <a  href={project.url} target="_blank" className="text-sm lg:text-lg hover:text-pink-300">
                        {project.title}
                    </a> : 
                    <p  className="text-sm lg:text-lg ">
                        {project.title}
                    </p> 
                }

                {/* description  */}
                <div className="tracking-wide mt-2 text-xs lg:text-base lg:mt-4"> 
                    <PortableText value={project.description}></PortableText>
                </div>
            </div> 

            {/* tech used for the project  */}
            <div className="grid grid-cols-3 gap-1 mb-0
                            xl:grid-cols-4 xl:gap-2  xl:mt-4 ">
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

export default ProjectCardComponent;