import { PortableTextBlock } from "sanity";

export type Experience= {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    position: string;
    company: string;
    description : PortableTextBlock[];
    roles: string[];
    achievement: string[];
    from : string;
    to: string;
    hidden: boolean;

   
}