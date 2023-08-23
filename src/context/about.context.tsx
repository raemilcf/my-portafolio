'use client'

import { createContext, useEffect, useState } from "react";
import AboutComponent from "../component/about/about.component";
import ProfileComponent from "../component/about/profile.component";
import { About } from "../models/About"
import { Presentation } from "../models/Presentation";
import { getAboutMe } from "../sanity/api/about-me/about-api";
import { getProfilePresentation } from "../sanity/api/about-me/presentation-api";


const aboutInitialValues :About = {
    _id : '',
    _createdAt : new Date,
    title: "",
    slug: "",
    catchPhrase1 : "",
    catchPhrase2 : "",
    content : [],
    url : "",
    version: 0,
}
const presentationInitialValues : Presentation = {
    _id: "",
    _createdAt: new Date,
    title: "",
    slug: "",
    version: 0,
    header: "",
    photo : "",
    technologies: [],
    content: [],
}


export interface AboutContextData {
    about : About ;
    profile: Presentation ;
    menuActive : boolean;
    isMenuActive: (isActive : boolean) => void;
}
export const AboutContext = createContext<AboutContextData>({
    about : {} as About,
    profile : {} as Presentation,
    menuActive : false,
    isMenuActive: () => {}
})

export const AboutProvider = () =>{
    const [about, setAbout] = useState<About>(aboutInitialValues);
    const [profile, setProfile] = useState<Presentation>(presentationInitialValues);
    const [menuActive, setMenuActive] = useState<boolean>(false);

    useEffect( () => {
        const waitAbout = async() => {
            setAbout(await getAboutMe());
            setProfile(await getProfilePresentation());

        }

        waitAbout();

    },[]);

    const isMenuActive = (isActive : boolean) => {
        // update experience active 
        setMenuActive(!isActive);
   }

    const value = {
        about,
        profile,
        menuActive,
        isMenuActive
    }

    return (
        <AboutContext.Provider value={value}>
            <AboutComponent></AboutComponent>
            <ProfileComponent></ProfileComponent>

        </AboutContext.Provider>
    )


}
