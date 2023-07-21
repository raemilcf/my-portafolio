
import HomeComponent from '@/src/component/home/home.component';
import { getWorkExperience } from '@/src/sanity/api/experience/experience-api';


export default async function Home() {

  
  // const about = await getAboutMe();
  // const myProjects = await getMyProjects();
  const experience = await getWorkExperience();
  // const presentation = await getProfilePresentation();


  return (
    <>
    <HomeComponent newexperiences={experience}></HomeComponent>

    </>
  )
}


//mover provider a component tipo use client 