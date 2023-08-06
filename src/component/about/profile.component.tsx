import { useContext } from "react";
import Image from "next/image";


import { PortableText } from "@portabletext/react";
import { AboutContext } from "@/src/context/about.context";


const ProfileComponent = () => {

    const { profile } = useContext(AboutContext);

    return (

        <div id="profile" className="pt-10 mt-10
                                    lg:px-16 lg:pt-12 lg:mt-16
                                    xl:px-24 xl:pt-20 xl:mt-20 ">
            <p className="text-lg text-center  mb-6  text-pink-300 
                          lg:text-left lg:text-3xl lg:mb-12 
                          ">{profile.header}</p>

            <div className="grid
                            lg:grid-cols-5  lg:gap-5">
                    <div className="flex flex-col  tracking-wider
                                    lg:col-span-3">
                        <div className="text-sm text-center
                                        lg:text-base lg:text-left">
                            <PortableText value={profile.content}></PortableText>  
                        </div>
                        <div className="mt-5 px-3 grid grid-cols-2
                                        xl:grid-cols-4 ">
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
                    <div className=" items-center mt-10 ml-[25%]
                                    lg:col-span-2 lg:justify-end lg:mt-0 lg:ml-0">
                    {
                        profile.photo && (

                            <div className="  w-44 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 lg:w-64">
                            <div className="  bg-gray-800 back">
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
