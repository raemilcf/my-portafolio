
'use client'
import { FC, useEffect, useState } from 'react';
import { Experience } from '@/src/models/Experience';
import { ExperienceContext, ExperienceProvider } from '@/src/context/experience.context';
import ExperiencesTabComponent from '@/src/component/experience/experiences.component';
import { activateExperience } from '../utils/experience.utils';


//load props with type
type Props ={
  experiencesList : Experience[];
}

//component with provider, use efect and state change
const ExperiencesComponent : FC<Props> = ( {experiencesList} ) =>{

  // const [experiences, setExperiences] = useState<Experience[]>([]);

  // //load all the experiences once
  // useEffect( () => {
  //   setExperiences([ ...experiencesList]);
  // }, []);

  // const loadExperiences = async (newExperiences: Experience[]) => {
  //     setExperiences([...newExperiences]);
  // }

  // const isExperienceActive = (experience : Experience) => {
  //      // update experience active 
  //      setExperiences(activateExperience(experiences, experience));
  // }
 
  // // Wrap the context value in useMemo to memoize it
  // const contextValue = {
  //   experiences,
  //   isExperienceActive,
  //   loadExperiences
  // };
  console.log(experiencesList);

  
  return (
        // <ExperienceContext.Provider value={contextValue}>
        <ExperienceProvider  experiencesList={experiencesList}  >
            <ExperiencesTabComponent></ExperiencesTabComponent>

        </ExperienceProvider>
      //  </ExperienceContext.Provider>
  )
}
export default ExperiencesComponent;
