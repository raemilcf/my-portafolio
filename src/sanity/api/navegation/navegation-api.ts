import { Navbar } from "@/src/models/Navbar";
import sanityClientConfig from "../../config/client-config";
import { createClient, groq } from "next-sanity";


export async function getPages() : Promise<Navbar[]>{

    return createClient(sanityClientConfig).fetch(
        groq`*[_type == 'page'] | order( _createdAt asc){
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
        }
        `
    )
}


export async function getPagebySlug() : Promise<Navbar[]>{

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

export async function getContactDetails() : Promise<Navbar>{

    return createClient(sanityClientConfig).fetch(
        groq`*[_type == 'page' && title == "contact"][0]{
            _id,
            _createdAt,
            title,
            header,
            "slug": slug.current,
            content,
            email

        }
        `
    )
}
