
import { Presentation } from "@/src/models/Presentation";
import sanityClientConfig from "@/src/sanity/config/client-config";
import { createClient, groq } from "next-sanity";


export async function getProfilePresentation() : Promise<Presentation>{

    return createClient(sanityClientConfig).fetch(
        groq`*[_type == 'presentation' && version == 1][0] {
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            version,
            header,
            'photo': photo.asset -> url,
            technologies,
            content
        }
        `
    )
}

