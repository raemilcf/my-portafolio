import { getAboutMe } from '@/src/sanity/api/about-me/about-api';
import { getMyProjects } from '@/src/sanity/api/projects/project-api';
import { getWorkExperience } from '@/src/sanity/api/experience/experience-api';
import { getProfilePresentation } from '@/src/sanity/api/about-me/presentation-api';

import AboutComponent from '@/src/component/about/about.component';
import ProjectsDisplayComponent from '@/src/component/projects/ProjectsDisplay.componet';
import ProfileComponent from '@/src/component/about/profile.component';
import ExperiencesComponent from '@/src/component/experience/experiences.component';
import { createContext, useContext, useState } from 'react';
import { Experience } from '@/src/models/Experience';

//---------------------funtionality 
export const activateExperience = (experiences : Experience[], experience : Experience) => {

  return [...experiences, { ...experience, active: !experience.active }];
}

//type of data of my context 
interface PortafolioConextData {
  experiences : Experience[];
  isExperienceActive : (experience : Experience) => void;
  loadExperiences : (experiences : Experience[]) => void;


}
const PortafolioContext = createContext<PortafolioConextData>({
  experiences: [],
  isExperienceActive : () => {},
  loadExperiences: () => {}

});

 // Create a helper function to use the context in components
 export function usePortafolioContext() {
  return useContext(PortafolioContext);
}


export default async function Home() {

  // const about = await getAboutMe();
  // const myProjects = await getMyProjects();
  // const experience = await getWorkExperience();
  // const presentation = await getProfilePresentation();



  const [experiences, setExperiences] = useState<Experience[]>([]);

  setExperiences([...await getWorkExperience()]);

  const loadExperiences = async (newExperiences: Experience[]) => {
      setExperiences([...await getWorkExperience()]);
  }

  const isExperienceActive = (experience : Experience) => {
       // Do something with the experience (this is just a placeholder)
       console.log("Experience active:", experience);
       // Example of updating the state with the experience
       setExperiences(activateExperience(experiences, experience));

  }
 




  // Wrap the context value in useMemo to memoize it
  const contextValue = {
    experiences,
    isExperienceActive,
    loadExperiences
  };
  
  return (
    <PortafolioContext.Provider value={contextValue}>
      <div className='flex px-16 py-12 max-auto sm:py-16 lg:px-20'>
        <div className='flex '>
          <h1>follow</h1>
        </div>

        <div className='px-16 flex flex-col sm:py-16 lg:px-20 gap-10'>
          <ExperiencesComponent experiences={experiences}></ExperiencesComponent>
        {/* <AboutComponent about={about} ></AboutComponent>
        <ProfileComponent profile={presentation}></ProfileComponent>
        <ProjectsDisplayComponent projects={myProjects} ></ProjectsDisplayComponent> */}

        </div>

        <div className='flex'>
          <h1>follow</h1>
        </div>
      </div>
    </PortafolioContext.Provider>
  )
}


//mover provider a component tipo use client 