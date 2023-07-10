import {  About } from "@/src/models/About";
import { Projects } from "@/src/models/Projects";
import { PortableText } from "@portabletext/react";
import { FC } from "react";

type ProjectProps = {
    projects : Projects[];
}

const  About : FC<ProjectProps> =  ({ projects }) =>  {

    return (
        <div className="grid grid-cols-3 ">
           
        </div>
    );

};

export default About;