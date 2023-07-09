import { getAbout } from '@/sanity/api-calls/about-utils';
import { getPages } from '@/sanity/api-calls/projects-utils'
import About from '@/src/component/about/about.component';
import { PortableText } from '@portabletext/react';


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
