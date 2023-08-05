'use client'
import { createContext, useEffect, useState } from "react";
import { Navbar } from "../models/Navbar";
import { getContactDetails } from "../sanity/api/navegation/navegation-api";
import ContactComponent from "../component/contact/contact.component";

const contactInitialValue : Navbar = {
    _id: "",
    _createdAt: new Date,
    title: "",
    slug: "",
    header: "",
    content: [],
    email : ""

}

export interface ContactContextData{
    contact : Navbar;
}

export const ContactContext = createContext<ContactContextData>({
    contact : {} as Navbar
})


export const ContactProvider = () => {

    const [contact, setContact] = useState<Navbar>(contactInitialValue);

    useEffect( () => {
        const getContact = async() => {
            setContact( await getContactDetails());

        }
        getContact();
    },[]);


    const value ={
        contact
    }

    return (
        <ContactContext.Provider value={value}>
            <ContactComponent></ContactComponent>

        </ContactContext.Provider>
    )
}