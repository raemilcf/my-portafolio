
import { FC, useContext } from "react";

import { Navbar } from "@/src/models/Navbar";
import Link from "next/link";
import { HeaderContext } from "@/src/context/header.context";



//show menu for mobile
const DropdownComponent = () => {

    const { isMenuActive,  navbarPages, menuActive } = useContext(HeaderContext);

    const toggleMenu = () => {
        isMenuActive(menuActive);
     }
    return (

        <div className= {menuActive ? 'block sm:hidden' : 'hidden sm:hidden'}>
        <div id="dropdownMenuPorta" className= ' absolute z-10 ml-[72%] right-1 bg-[#0d3b4d] rounded-md'>
            <ul className=' text-center divide-y divide-cyan-700/50'>
            {navbarPages.map( (navbar) => (
                <li key={navbar._id}  className='p-4 text-gray-400 hover:bg-cyan-700/50 hover:text-gray-300 hover:rounded-sm'>
                    <Link  href={`/#${navbar.slug}`} onClick={toggleMenu} >
                        {navbar.title}
                    </Link>
                </li>                        
            ))}
            </ul>
        </div>
    </div>
    )
}
export default DropdownComponent;