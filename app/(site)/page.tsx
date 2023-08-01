
import HomeComponent from '@/src/component/home/home.component';
import { getAboutMe } from '@/src/sanity/api/about-me/about-api';
import { getProfilePresentation } from '@/src/sanity/api/about-me/presentation-api';
import { getWorkExperience } from '@/src/sanity/api/experience/experience-api';
import { getMyProjects } from '@/src/sanity/api/projects/project-api';


export default async function Home() {

  
  const about = await getAboutMe();
  const myProjects = await getMyProjects();
  const experience = await getWorkExperience();
  const presentation = await getProfilePresentation();


  return (
    <>
    <HomeComponent  
      experiencesList={experience}
      aboutData={about} 
      projectsList={myProjects} 
      presentationData={presentation}
    >
    </HomeComponent>

    </>
  )
}


//mover provider a component tipo use client 