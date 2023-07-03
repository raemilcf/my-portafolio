import { getPages } from '@/sanity/api-calls/projects-utils'
import { PortableText } from '@portabletext/react';


export default async function Home() {

  const pages = await getPages();
console.log(pages);
  return (
    // main goes here 
    <div className=' mt-9 mb-9 flex flex-col'>
         {
          pages.map( (page) => (
            <div className='text-lg text-gray-200' id={page._id} key={page._id}>
              <h1>{page.title}</h1>
              <PortableText value={page.content}/>
            </div>

          ))
         }
    </div>
  
  )
}
