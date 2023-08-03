import { PortableTextBlock } from "sanity";

export type About = {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    catchPhrase1 : string;
    catchPhrase2 : string;
    content : PortableTextBlock[];
    url : string;
    version: number;
}