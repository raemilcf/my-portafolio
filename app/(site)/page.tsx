import { getAbout } from '@/src/sanity/api/about-me/about-api';
import About from '@/src/component/about/about.component';


export default async function Home() {

  const about = await getAbout();
console.log(about);
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
