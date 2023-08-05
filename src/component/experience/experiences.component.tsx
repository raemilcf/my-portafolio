import { ExperienceContext } from "@/src/context/experience.context";
import { useContext } from "react";
import ExperienceSectionComponent from "./experience_section.component";

import ExperienceElementComponent from "./experience_tab.componet";



const ExperiencesComponent = () => {

    const { experiences } = useContext(ExperienceContext);

    //show tab with all the experience 
    return (
        <div id="experience" className=" pt-20 mt-20">
            <p className="mb-10 text-3xl text-pink-300 text-center">Real world experience</p>

        <div className="mt-5 grid grid-cols-6">
             <ul className="block col-span-2 mr-5">
                {
                    experiences.map( (experience) => (
                        experience.hidden ? "" :
                        <ExperienceElementComponent key={experience._id} experience={experience} ></ExperienceElementComponent>
                    ))
                }
            </ul>
            <div className="block col-span-4">
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