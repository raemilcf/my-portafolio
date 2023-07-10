import { Navbar } from "@/src/models/Navbar";
import sanityClientConfig from "@/src/sanity/config/client-config";
import { createClient, groq } from "next-sanity";


export async function getProjects() : Promise<Navbar[]>{

    return createClient(sanityClientConfig).fetch(
        groq`*[_type == 'projects' && hidden == false ] {
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
        }
        `
    )
}
