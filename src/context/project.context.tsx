'use client'

import { createContext, useEffect, useState } from "react"
import ProjectsDisplayComponent from "../component/projects/projects-display.componet";
import { Projects } from "../models/Projects"
import { getMyProjects } from "../sanity/api/projects/project-api"


//type of data of my context 
export interface ProjectContextData {
    projects : Projects[];
}

   //create context
export const ProjectContext = createContext<ProjectContextData>({
    projects : [],

});

export const ProjectProvider = () => {

    const [projects, setProjects] = useState<Projects[]>([]);

    useEffect( () => {
        
        const waitProjects = async () => {
            setProjects( await getMyProjects());
        }

        waitProjects();
    },[]);

    const value ={
        projects
    }

    return (
        <ProjectContext.Provider value={value}>
            <ProjectsDisplayComponent></ProjectsDisplayComponent>
        </ProjectContext.Provider>
    )

    
}