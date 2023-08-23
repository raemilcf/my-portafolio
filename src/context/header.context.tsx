'use client'
import { createContext, useEffect, useState } from "react";
import HeaderComponent from "../component/header/header.component";
import { getPages } from "../sanity/api/navegation/navegation-api";
import { Navbar } from "../models/Navbar";
import DropdownComponent from "../component/dropdown/dropdown.component";


export interface HeaderContextData {
    navbarPages : Navbar[];
    menuActive : boolean;
    isMenuActive: (isActive : boolean) => void;
    


}

export const HeaderContext = createContext<HeaderContextData>({
    navbarPages : [],
    menuActive : false,
    isMenuActive: () => {}

})

export const HeaderProvider = () => {

    const [navbarPages, setNavbarPages] = useState<Navbar[]>([]);
    const [menuActive, setMenuActive] = useState<boolean>(false);

    useEffect( () => {
        
        const waitPages = async () => {
            setNavbarPages( await getPages());
        }
        waitPages();
    },[]);


    const isMenuActive = (isActive : boolean) => {
        // update experience active 
        setMenuActive(!isActive);
   }

    const value ={
        navbarPages,
        menuActive,
        isMenuActive
    }

    return (
        <HeaderContext.Provider value={value}>
          <HeaderComponent></HeaderComponent>
          <DropdownComponent></DropdownComponent>
        </HeaderContext.Provider>
    )
}