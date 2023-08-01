import { ExperienceContext } from "@/src/context/experience.context";
import { Experience } from "@/src/models/Experience"
import { FC, useContext } from "react";


type experienceProps ={
    experience : Experience;
}


const ExperienceElementComponent : FC<experienceProps> = ( {experience} ) =>{

   const { isExperienceActive } = useContext(ExperienceContext);

   //highlight one experience or the other
    const changeTab = () => {
       isExperienceActive(experience);
    }

    return (
       <>
        <li className={experience.active ?  "border-l-2 border-pink-500" : "border-l-2 hover:border-pink-300" }>
                <button className={experience.active ? "inline-block p-4 text-pink-500" : "inline-block p-4 hover:text-pink-300 hover:scale-110 "}
                    id={experience._id}
                    data-tabs-target={`#${experience._id}`}
                    type="button" 
                    role="tab" 
                    aria-controls="profile" 
                    aria-selected="false"
                    onClick={changeTab}
                    >
                        {experience.company}
                </button>
            </li>
       </>
    )
}

export default ExperienceElementComponent;



