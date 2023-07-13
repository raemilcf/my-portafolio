import { Image, PortableTextBlock } from "sanity";


export type Presentation= {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    version: number;
    header: string;
    photo : string;
    technologies: string[];
    content: PortableTextBlock[];
   
}