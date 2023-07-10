
import { Experience } from "@/src/models/Experience";
import sanityClientConfig from "@/src/sanity/config/client-config";
import { createClient, groq } from "next-sanity";


export async function getWorkExperience() : Promise<Experience[]>{

    return createClient(sanityClientConfig).fetch(
        groq`*[_type == 'experience'] {
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            position,
            company,
            from,
            to,
            roles,
            description,
            achievement,
            hidden
        }
        `
    )
}
