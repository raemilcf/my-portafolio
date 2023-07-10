import { Image } from "sanity";


export type Presentation= {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    version: number;
    header: string;
    photo : Image;
    technologies: string[];
   
}