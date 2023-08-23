import { FC, useContext } from "react";
import { HeaderContext } from "@/src/context/header.context";

import { Navbar } from "@/src/models/Navbar";

import Link from "next/link";
import { Menu } from "react-feather";


const HeaderComponent = () =>{

    const { isMenuActive, navbarPages, menuActive } = useContext(HeaderContext);

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
        </>
    )
}

export default HeaderComponent;