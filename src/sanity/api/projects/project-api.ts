import { Projects } from "@/src/models/Projects";
import sanityClientConfig from "@/src/sanity/config/client-config";
import { createClient, groq } from "next-sanity";


export async function getMyProjects() : Promise<Projects[]>{

    return createClient(sanityClientConfig).fetch(
        groq`*[_type == 'projects' && hidden == false ] {
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            type,
            description,
            technologies,
            url,
            github,
            hidden
        }
        `
    )
}
