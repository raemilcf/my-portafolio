import { getAboutMe } from '@/src/sanity/api/about-me/about-api';
import About from '@/src/component/about/about.component';
import { getMyProjects } from '@/src/sanity/api/projects/project-api';
import { getWorkExperience } from '@/src/sanity/api/experience/experience-api';
import { getProfilePresentation } from '@/src/sanity/api/about-me/presentation-api';


export default async function Home() {

  const about = await getAboutMe();
  const myProjects = await getMyProjects();
  const experience = await getWorkExperience();
  const presentation = await getProfilePresentation();
  

console.log(about);
console.log(myProjects);
console.log(experience);
console.log(presentation);


  return (
    // main goes here 
    <div className='flex px-16 py-12 max-auto sm:py-16 lg:px-20'>
      <div className='flex '>
        <h1>follow</h1>
      </div>

      <div className='px-16 flex  sm:py-16 lg:px-20 '>
      <About about={about} ></About>
      </div>

      <div className='flex '>
        <h1>follow</h1>
      </div>
     
    </div>
  
  )
}
