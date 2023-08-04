
import { AboutContext } from "@/src/context/about.context";
import { PortableText } from "@portabletext/react";
import { useContext } from "react";

const  AboutComponent = () =>  {

    const { about } = useContext(AboutContext);

    return (
        <div id="about" className=" pt-20 mt-20">
            <div className="flex flex-col gap-y-3 ">
                <p className=" text-base ">Hello, my name is</p>
                <p className="text-6xl 
                            bg-gradient-to-r from-pink-300 from-10% via-pink-600 via-30% to-pink-900 to-60% 
                            text-transparent bg-clip-text ">
                            {about.catchPhrase1}
                </p>
                <p className="text-4xl  h-16
                            bg-gradient-to-r from-pink-200 from-10% via-pink-400 via-30% to-pink-600 to-60% 
                            text-transparent bg-clip-text ">
                                {about.catchPhrase2}
                </p>
                <div className="text-lg flex flex-row w-full mr-12 pr-96">
                    <PortableText value={about.content}></PortableText>
                </div>
                <a
                className="mt-3 border-2 rounded-md text-center
                           bg-gradient-to-r from-pink-200 from-10% via-pink-400 via-30% to-pink-600 to-60% text-transparent bg-clip-text
                         border-gray-500 p-2 w-1/4 hover:border-pink-600"
                
                href={about.url}
                title="my Github"
                target="_blank"
                >Check out my latest work! </a>
            </div>
        </div> 
    );

};

export default AboutComponent;