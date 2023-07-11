import {  About } from "@/src/models/About";
import { Projects } from "@/src/models/Projects";
import { PortableText } from "@portabletext/react";
import { FC } from "react";
import { Link } from "react-feather";
import Image from "next/image";


type ProjectProps = {
    projects : Projects[];
}

const  Projects : FC<ProjectProps> =  ({ projects }) =>  {

    return (
        <div id="projects">
            <p className="mt-5 mb-10 text-3xl text-pink-300  ">What I have worked on!</p>
            <div className="grid grid-cols-3  gap-4 px-10 ">
                {
                    projects.map( (project) => (
                        <div key={project._id} className="static flex flex-col p-8 border-2 border-transparent 
                                                        rounded-md bg-cyan-950
                                                        gap-3 hover:scale-105 ">

                            <div className="flex flex-row justify-between ">
                                <Image
                                        src="/folder.svg"
                                        alt={project.title}
                                        width={38}
                                        height={38}
                                />
                                <div className="flex flex-row gap-3">
                                    <a href={project.github} target="_blank" className="mt-4" >
                                        <Image
                                            src="/github.svg"
                                            alt={project.title}
                                            width={20}
                                            height={20}
                                        />
                                    </a>
                                    <a href={project.github} target="_blank" className="mt-4">
                                        <Image
                                            src="/external-link.svg"
                                            alt={project.title}
                                            width={20}
                                            height={20}

                                        />
                                    </a>
                                </div>
                            </div>

                            <a  href={project.url} target="_blank" className="text-lg hover:text-pink-300">
                                {project.title}
                            </a>

                            <div className="tracking-wide"> 
                                <PortableText value={project.description}></PortableText>
                            </div>
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
                    ))
                }
            
            </div>
        </div>
    );

};

export default Projects;