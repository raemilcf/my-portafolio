import {  About } from "@/src/models/About";
import { Projects } from "@/src/models/Projects";
import { FC } from "react";

type ProjectProps = {
    c : Projects[];
}

const  Projects : FC<ProjectProps> =  ({ projects }) =>  {

    return (
        <div className="grid grid-cols-3 ">
           
        </div>
    );

};

export default Projects;