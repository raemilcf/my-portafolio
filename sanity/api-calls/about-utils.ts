import { About } from "@/models/About";
import { createClient, groq } from "next-sanity";
import sanityClientConfig from "../config/client-config";


export async function getAbout() :  Promise<About>{

    return createClient(sanityClientConfig).fetch(
        groq`*[_type == 'about'] | order( _createdAt asc)[0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            catchPhrase1,
            catchPhrase2,
            content,
            url
        }
        `
    )
}
