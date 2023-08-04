import { useContext } from "react";
import Image from "next/image";


import { PortableText } from "@portabletext/react";
import { AboutContext } from "@/src/context/about.context";


const ProfileComponent = () => {

    const { profile } = useContext(AboutContext);

    return (

        <div id="profile" className="px-24  pt-20 mt-20 ">
            <p className=" mb-12 text-3xl text-pink-300 text-left ">{profile.header}</p>

            <div className="grid grid-cols-5  gap-5">
                    <div className="flex flex-col col-span-3">
                        <div>
                            <PortableText value={profile.content}></PortableText>  
                        </div>
                        <div className="mt-5 px-3 grid grid-cols-4 ">
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
                    <div className="col-span-2 justify-end ">
                    {
                        profile.photo && (

                            <div className="  w-64 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
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
