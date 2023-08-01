import { ExperienceContext } from "@/src/context/experience.context";
import { PortableText } from "@portabletext/react";
import { useContext } from "react";
import ExperienceElementComponent from "./experience_element.componet";



const ExperiencesComponent = () => {

    const { experiences } = useContext(ExperienceContext);
    console.log(experiences);

    //show tab with all the experience 
    return (
        <div className="grid grid-cols-6">
             <ul className="block col-span-2">
                {
                    experiences.map( (experience) => (
                        experience.hidden ? "" :
                        <ExperienceElementComponent key={experience._id} experience={experience} ></ExperienceElementComponent>
                    ))
                }
            </ul>
            <div className="block col-span-4">
                {
                    experiences.map( (experience) => (
                        experience.hidden ?  "" :
                        <div key={experience._id} className={experience.active ? "block" : "hidden" }>
                            <p>{experience.position}</p>
                            <p>{experience.from}</p> <span>-</span> <p>{experience.to}</p>
                            <PortableText value={experience.description}></PortableText>
                            <p>{experience.roles}</p>
                            <p>{experience.achievement}</p>
                            <p>{experience.technologies}</p>

                        </div>
                       
                    ))
                }
            </div>
    {/* <ul className="block col-span-2" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
        <li className="border-l-2 hover:border-pink-300">
            <button className="inline-block p-4 hover:text-pink-300 hover:scale-110  " id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
        </li>
        <li className="border-l-2 hover:border-pink-300">
            <button className="inline-block p-4  hover:text-pink-300 hover:scale-110 " id="dashboard-tab"  data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
        </li>
        <li className="border-l-2 hover:border-pink-300">
            <button className="inline-block p-4  hover:text-pink-300 hover:scale-110 " id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
        </li>
        <li className="border-l-2 hover:border-pink-300">
            <button className="inline-block p-4  hover:text-pink-300 hover:scale-110 " id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
        </li>
    </ul>
<div id="myTabContent" className="col-span-4 w-96 h-96">
    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling.</p>
    </div>
    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling.</p>
    </div>
    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling.</p>
    </div>
    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling.</p>
    </div>
</div> */}

           

        </div>


    );
}

export default ExperiencesComponent;