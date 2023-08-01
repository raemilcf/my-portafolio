
'use client'
import ExperiencesComponent from '@/src/component/experience/experiences_tab.component';
import { FC, useContext, useEffect, useState } from 'react';
import { Experience } from '@/src/models/Experience';
import AboutComponent from '../about/about.component';
import ProfileComponent from '../about/profile.component';
import ProjectsDisplayComponent from '../projects/ProjectsDisplay.componet';
import { About } from '@/src/models/About';
import { Projects } from '@/src/models/Projects';
import { Presentation } from '@/src/models/Presentation';
import { PortafolioContext } from '@/src/context/portafolio';

//---------------------funtionality 

//show or hide one experience and description 
export const activateExperience = (experiences : Experience[], experience : Experience) => {

  if(experiences.find( (exp) => exp._id === experience._id)){

    return  experiences.map( (exp)=> (
      exp._id === experience._id ? { ...exp, active: !exp.active} : {...exp, active: false} 
    ));
  }
  return [...experiences];
}

 // Create a helper function to use the context in components
export function usePortafolioContext() {
  return useContext(PortafolioContext);
}

//load props with type
type Props ={
  aboutData : About;
  presentationData: Presentation;
  projectsList : Projects[];
  experiencesList : Experience[];
}

const HomeComponent : FC<Props> = ( {experiencesList, aboutData, projectsList, presentationData} ) =>{

  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [about, setAbout] = useState<About>(aboutData);
  const [projects, setProjects] = useState<Projects[]>([]);
  const [presentation, setPresentation] = useState<Presentation>(presentationData);

  //load all the experiences once
  useEffect( () => {
    setExperiences([ ...experiencesList]);
    setAbout(aboutData);
    setProjects([...projectsList]);
    setPresentation(presentationData);
  }, []);

  const loadExperiences = async (newExperiences: Experience[]) => {
      setExperiences([...newExperiences]);
  }

  const isExperienceActive = (experience : Experience) => {
       // update experience active 
       setExperiences(activateExperience(experiences, experience));
  }
 
  // Wrap the context value in useMemo to memoize it
  const contextValue = {
    about,
    presentation,
    projects,
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
        <AboutComponent about={about} ></AboutComponent>
        <ProfileComponent profile={presentation}></ProfileComponent>
        <ProjectsDisplayComponent projects={projects} ></ProjectsDisplayComponent>
        <ExperiencesComponent experiences={experiences}></ExperiencesComponent>


        </div>

        <div className='flex'>
          <h1>follow</h1>
        </div>
      </div>
    </PortafolioContext.Provider>
  )
}
export default HomeComponent;