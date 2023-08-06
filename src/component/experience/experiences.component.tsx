import { ExperienceContext } from "@/src/context/experience.context";
import { useContext } from "react";
import ExperienceSectionComponent from "./experience_section.component";

import ExperienceElementComponent from "./experience_tab.componet";



const ExperiencesComponent = () => {

    const { experiences } = useContext(ExperienceContext);

    //show tab with all the experience 
    return (
        <div id="experience" className="pt-10 mt-10  lg:pt-20 lg:mt-20">
            <p className="mb-5 text-lg text-pink-300 text-center
                         lg:mb-10 lg:text-3xl">
                        Real world experience</p>

        <div className="mt-2 flex flex-col lg:grid lg:grid-cols-6 lg:mt-5">
             <ul className="flex items center justify-center overflow-x-auto lg:block lg:col-span-2 lg:mr-5">
                {
                    experiences.map( (experience) => (
                        experience.hidden ? "" :
                        <ExperienceElementComponent key={experience._id} experience={experience} ></ExperienceElementComponent>
                    ))
                }
            </ul>
            <div className=" lg:block mt-5 lg:mt-0 lg:col-span-4">
                {
                    experiences.map( (experience) => (
                        <ExperienceSectionComponent key={experience._id} experience={experience}></ExperienceSectionComponent>
                    ))
                }
            </div>
            </div>
        </div>


    );
}

export default ExperiencesComponent;