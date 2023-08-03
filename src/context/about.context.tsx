'use client'

import { createContext, useEffect, useState } from "react";
import AboutComponent from "../component/about/about.component";
import ProfileComponent from "../component/about/profile.component";
import { About } from "../models/About"
import { Presentation } from "../models/Presentation";
import { getAboutMe } from "../sanity/api/about-me/about-api";
import { getProfilePresentation } from "../sanity/api/about-me/presentation-api";


export interface AboutContextData {
    about : About ;
    profile: Presentation ;
}

export const AboutContext = createContext<AboutContextData>({
    about : {} as About,
    profile : {} as Presentation,
})

export const AboutProvider = () =>{
    const [about, setAbout] = useState<About>();
    const [profile, setProfile] = useState<Presentation>();

    useEffect( () => {
        const waitAbout = async() => {
            setAbout(await getAboutMe());
            setProfile(await getProfilePresentation());

        }

        waitAbout();

    },[]);

    const value = {
        about,
        profile
    }

    return (
        <AboutContext.Provider value={value}>
            <AboutComponent></AboutComponent>
            <ProfileComponent></ProfileComponent>

        </AboutContext.Provider>
    )


}
