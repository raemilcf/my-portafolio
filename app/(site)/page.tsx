
import React, { useContext } from 'react'

import { AboutContext } from '@/src/context/about.context';
import { getPages } from '@/src/sanity/api/navegation/navegation-api';

import Link from 'next/link'
import { Menu } from 'react-feather';

import HomeComponent from '@/src/component/home/home.component';

export default async function Home() {

  const navbarPages = await getPages();

    const { isMenuActive, menuActive } = useContext(AboutContext);

    console.log(menuActive);
   //highlight one experience or the other
    const toggleMenu = () => {
       isMenuActive(menuActive);
    }
  return (

    <>
    
      {/* navigation bar  */}
      <header className='sticky px-6 pt-2 flex justify-between'>
        <Link href='/' className='flex flex-col items-center
        bg-gradient-to-r from-pink-500 to-neutral-500 bg-clip-text text-transparent'>
            {/* <Monitor color='white' size={40}/>  */}
            <p className='text-base'>&#10094;&#47;&#10095;</p>
            <p className='tracking-widest text-lg font-extrabold'>raemil</p>
        
        </Link>
        {/* temporaly hidden menu for mobile */}
        <div className='items-end gap-5 mb-1 hidden sm:flex'>
            {navbarPages.map( (navbar) => (
                    <Link className='hover:text-gray-500' key={navbar._id} href={`/#${navbar.slug}`} >
                        {navbar.title}
                    </Link>
            ))}
        </div>
        <div className='flex items-end  sm:hidden w-6 h-10 hover:scale-110 hover:stroke-pink-500'>
            <button id="menuPorta" onClick={toggleMenu}>
            <Menu color="#D1D5DB" />

            </button>
        </div>

      </header>

  {/* display all the content  */}
      <main> 
        <div className= {menuActive ? 'block' : 'hidden'}>
            <div id="dropdownMenuPorta" className= ' absolute z-10 ml-[72%] right-1 bg-[#0d3b4d] rounded-md'>
                <ul className=' text-center divide-y divide-cyan-700/50'>
                {navbarPages.map( (navbar) => (
                    <li key={navbar._id}  className='p-4 text-gray-400 hover:bg-cyan-700/50 hover:text-gray-300 hover:rounded-sm'>
                        <Link  href={`/#${navbar.slug}`} >
                            {navbar.title}
                        </Link>
                    </li>                        
                ))}
                </ul>
            </div>
        </div>
      
        <HomeComponent></HomeComponent>
  </main>
 
  </>
  )
}

