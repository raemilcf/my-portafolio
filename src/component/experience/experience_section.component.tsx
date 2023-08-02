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
        <p className="text-2xl font-bold text-pink-300">{experience.position}</p>

        <div className="flex flex-row gap-1 ">
            <p>{experience.from}</p> <span> - </span><p>{experience.to}</p>
        </div>

        <div className="mt-4 text-justify text-sm ">
            <PortableText value={experience.description}></PortableText>
        </div>

        <div className="mt-4">
        {
            experience.roles.map( (role) => (
                <div  key={role} className="flex flex-row mb-2">
                    <Image 
                    src="/target.svg"
                    width={18}
                    height={18}
                    alt="right"
                    />
                    <p className="text-sm ml-1">{role}</p> 
                </div>
            ))
        }
        </div>
        <div className="mt-4">
        {
            experience.achievement.map( (achiv) => (
                <div  key={achiv} className="flex flex-row mb-2">
                    <Image 
                    src="/star.svg"
                    width={18}
                    height={18}
                    alt="right"
                    />
                    <p className="text-sm ml-1"> {achiv} </p>
                                
                </div>
            ))      
        }      
        </div>
        <div className="mt-5 px-3 grid grid-cols-4 ">
        {
            experience.technologies.map( (tech) => (
                <div  key={tech} className="flex flex-row">
                    <Image
                    src="/chevron-right.svg"
                    width={18}
                    height={18}
                    alt="right"
                    />
                    <p className="text-sm text-pink-300">{tech}</p>        
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