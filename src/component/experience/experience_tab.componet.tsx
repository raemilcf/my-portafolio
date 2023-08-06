import { ExperienceContext } from "@/src/context/experience.context";
import { Experience } from "@/src/models/Experience"
import { FC, useContext } from "react";


type experienceProps ={
    experience : Experience;
}


const ExperienceTabComponent : FC<experienceProps> = ( {experience} ) =>{

   const { isExperienceActive } = useContext(ExperienceContext);

   //highlight one experience or the other
    const changeTab = () => {
       isExperienceActive(experience);
    }

    return (
       <>
        <li className={experience.active ?  " float-left border-b-2 lg:border-l-2 lg:border-b-0 border-pink-500" : " float-left border-b-2 lg:border-l-2 lg:border-b-0 hover:border-pink-300" }>
                <button className={experience.active ? "inline-block p-2 lg:p-4 text-sm lg:text-base text-pink-500" : "inline-block p-2 lg:p-4 text-sm lg:text-base hover:text-pink-300 hover:scale-110 "}
                    id={experience._id}
                    data-tabs-target={`#${experience._id}`}
                    type="button" 
                    role="tab" 
                    aria-controls="profile" 
                    aria-selected="false"
                    onClick={changeTab}
                    >
                        {experience.position}
                </button>
            </li>
           
       </>
    )
}

export default ExperienceTabComponent;



