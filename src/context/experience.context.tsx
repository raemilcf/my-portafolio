//The "use client" directive is a convention to declare a boundary between a 
//Server and Client Component module graph.

 // server component -elements client do not touch or have access to its modification 
// {/* client component like button, input, search box, elements client interact with  */}

'use client'
import { createContext,  useEffect, useState } from "react";
import ExperiencesTabComponent from "../component/experience/experiences.component";
import { Experience } from "../models/Experience";
import { getWorkExperience } from "../sanity/api/experience/experience-api";
import { getDateFormat } from "../utils/commonUtils";

//type of data of my context 
export interface ExperienceContextData {
    experiences : Experience[];
    isExperienceActive : (experience : Experience) => void;
    loadExperiences : (experiences : Experience[]) => void;
}

   //create context
export const ExperienceContext = createContext<ExperienceContextData>({
    experiences : [],
    isExperienceActive : () => {},
    loadExperiences: () => {}
  
});
  
  export const ExperienceProvider = ()  => {
  
    const [experiences, setExperiences] = useState<Experience[]>([]);
   
    //load all the experiences once
    useEffect( () => {
        const waitExperience = async () => {
            setExperiences( activateFirst( fixFromDateFormat( await getWorkExperience()) ));
        }

        waitExperience();

    }, []);// <-- Make sure the dependency array is empty if you only want the effect to run once
  
    const loadExperiences = async (newExperiences: Experience[]) => {
        setExperiences([...newExperiences]);
    }

    const isExperienceActive = (experience : Experience) => {
         // update experience active 
         setExperiences(activateExperience(experiences, experience));
    }
   
    // Wrap the context value in useMemo to memoize it
    const contextValue = {
      experiences,
      isExperienceActive,
      loadExperiences
    };
    
    return (
      <ExperienceContext.Provider value={contextValue}>
        <ExperiencesTabComponent></ExperiencesTabComponent>
      </ExperienceContext.Provider>
    )
 }


 //----------------------------funtionality----------------------------


export const activateExperience = (experiences : Experience[], experience : Experience) => {

    if(experiences.find( (exp) => exp._id === experience._id)){
  
      return  experiences.map( (exp)=> (
        exp._id === experience._id ? { ...exp, active: !exp.active} : {...exp, active: false} 
      ));
    }
    return [...experiences];
}

//adjust date to format month -year 
export const fixFromDateFormat = (experiences: Experience[]) => {

  experiences.map( (exp) => (
    exp.fromDisplay = getDateFormat(exp.from)

  ))

  return [...experiences];

}

export const activateFirst = (experiences: Experience[]) => {

  experiences[0].active=true; 

  return [...experiences];

}
