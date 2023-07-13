import { FC } from "react";
import Image from "next/image";


import { Presentation } from "@/src/models/Presentation";
import { PortableText } from "@portabletext/react";


type ProfileProps ={
    profile : Presentation ;
}

const ProfileComponent : FC<ProfileProps> = ( {profile} ) => {
    console.log(profile.photo);
    return (

        <div className="px-24 pt-4  ">
            <p className="mt-5 mb-10 text-3xl text-pink-300 text-center ">{profile.header}</p>

     <div className="grid grid-cols-4 sm:grid-cols-1 gap-5">
                <div className="flex flex-col col-span-2 sm:col-span-1">
                    <div>
                        <PortableText value={profile.content}></PortableText>  
                    </div>
                    <div className="mt-5 px-3 grid grid-cols-4 sm:grid-cols-1">
                    {
                        profile.technologies.map( (tech) => (
                            <div  key={tech} className="flex flex-row">
                                <Image 
                                src="/chevron-right.svg"
                                width={18}
                                height={18}
                                alt="right"
                                />
                                <p className="text-sm text-pink-300">
                                    {tech}
                                </p>
                            </div>
                        ))
                    }
                    </div>
                </div>
                <div className="col-span-2 sm:col-span-1 ml-0 ">
                {
                    profile.photo && (

                        <div className="w-64 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                        <div className=" bg-gray-800 back">
                        <Image 
                        src={profile.photo}
                        width={250}
                        height={150}
                        alt={profile.title}
                        
                        />
                        </div>
                      </div>
                            
                        
                    )
                } 
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent;
