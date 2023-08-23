import { Experience } from "@/src/models/Experience";
import { PortableText } from "@portabletext/react";
import { FC } from "react";
import Image from "next/image";



type Props ={
    experience : Experience;
}
const ExperienceSectionComponent : FC<Props> = ( {experience} ) => {

    return (
    <>
    {experience.hidden ?  "" :
    <div key={experience._id} className={experience.active ? "block" : "hidden" }>
        <div className="flex flex-row">
        <p className="text-sm lg:text-lg font-bold ">{experience.position}</p>
        <span className="text-sm lg:text-lg text-pink-300">&nbsp;  @</span>
        <a href={experience.urlCompany} className="text-sm lg:text-lg text-pink-300">{experience.company}</a>
        </div>
      

        <div className="flex flex-row gap-1 text-gray-400 text-xs">
            <p>{experience.fromDisplay}</p> <span> - </span><p>{experience.to}</p>
        </div>

        <div className="mt-2 text-xs text-justify lg:text-sm lg:mt-2">
            <PortableText value={experience.description}></PortableText>
        </div>

        <div className="mt-2 lg:mt-4">
        {
            experience.roles.map( (role) => (
                <div  key={role} className="flex flex-row mb-2">
                    <Image 
                    src="chevron-right.svg"
                    width={16}
                    height={16}
                    alt="right"
                    className="mr-2 mt-1"
                    />
                    <p className="text-xs ml-1 lg:text-sm ">{role}</p> 
                </div>
            ))
        }
        </div>
        <div className="mt-6">
        {
            experience.achievement.map( (achiv) => (
                <div  key={achiv} className="flex flex-row mb-2 items-start">
                    <Image 
                    src="star.svg"
                    width={16}
                    height={16}
                    alt="right"
                    className="mr-2 mt-1 w-3 lg:w-4 "
                    />
                    <p className="text-xs ml-1 lg:text-sm"> {achiv} </p>
                                
                </div>
            ))      
        }      
        </div>
        <div className="mt-3 p-4 grid grid-cols-2 lg:grid-cols-4 lg:mt-5 ">
        {
            experience.technologies.map( (tech) => (
                <div  key={tech} className="flex flex-row">
                    <Image
                    src="chevron-right.svg"
                    width={18}
                    height={18}
                    alt="right"
                    />
                    <p className="text-sm">{tech}</p>        
                </div>     
            ))
        }
        </div>
    </div>
    }
    </>
    );
}

export default ExperienceSectionComponent;
