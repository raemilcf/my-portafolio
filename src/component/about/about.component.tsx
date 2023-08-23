
import { AboutContext } from "@/src/context/about.context";
import { PortableText } from "@portabletext/react";
import { useContext } from "react";

const  AboutComponent = () =>  {

    const { about } = useContext(AboutContext);

    return (
        <div id="about" className=" pt-6 mt-6
                                    lg:pt-16 lg:mt-16
                                    xl:pt-20 xl:mt-20">
            <div className="flex flex-col gap-y-3 ">
                <p className=" text-xs  sm:text-base">Hello, my name is</p>
                <p className="text-3xl
                            bg-gradient-to-r from-pink-300 from-10% via-pink-600 via-30% to-pink-900 to-60% 
                            text-transparent bg-clip-text  
                            sm:text-4xl
                            lg:text-6xl 
                            ">
                            {about.catchPhrase1}
                </p>
                <p className="text-sm 
                            bg-gradient-to-r from-pink-200 from-10% via-pink-400 via-30% to-pink-600 to-60% 
                            text-transparent bg-clip-text 
                            sm:text-lg
                            lg:text-3xl 
                            xl:text-4xl 
                             ">
                                {about.catchPhrase2}
                </p>
                <div className="text-xs flex flex-row w-full mr-12 
                                sm:text-lg
                                xl:text-2xl
                                xl:pr-64
                ">
                    <PortableText value={about.content}></PortableText>
                </div>
                <div className="flex flex-row">
                    <a
                    className="mt-3 border-2 rounded-md text-center
                            bg-gradient-to-r from-pink-200 from-10% via-pink-400 via-30% to-pink-600 to-60% text-transparent bg-clip-text
                            border-gray-500 p-2  hover:border-pink-600
                            text-xs
                            sm:text-lg
                            "
                    href={about.url}
                    title="my Github"
                    target="_blank"
                    >Check out my latest work! </a>
                </div>
                
            </div>
        </div> 
    );

};

export default AboutComponent;