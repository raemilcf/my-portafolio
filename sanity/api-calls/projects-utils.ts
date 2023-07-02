import { Navbar } from "@/models/Navbar";
import sanityClientConfig from "../config/client-config";
import { createClient, groq } from "next-sanity";


export async function getNavbar() : Promise<Navbar[]>{

    return createClient(sanityClientConfig).fetch(
        groq`*[_type == 'page'] | order( _createdAt asc){
            _id,
            _createdAt,
            title,
            "slug": slug.current
        }
        `
    )
}