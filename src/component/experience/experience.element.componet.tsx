'use client'
import { Experience } from "@/src/models/Experience"
import { FC, useState } from "react";


type experienceProps ={
    experience : Experience;
}

const ExperienceElementComponent : FC<experienceProps> = ( {experience} ) =>{

    const [elementStyle, setElementStyle] = useState("border-l-2 hover:border-pink-300");
    const [buttonStyle, setButtonStyle] = useState("inline-block p-4 hover:text-pink-300 hover:scale-110 ");
    const[element, setElement] = useState(null);


    const changeTab = () => {
        setElementStyle("border-l-2 border-pink-500");
        setButtonStyle("inline-block p-4 text-pink-500");

        setElement(experience);


    }

    return (
       <>
        <li className={elementStyle}>
                <button className={buttonStyle}
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
