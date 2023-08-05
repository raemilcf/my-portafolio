import { PortableTextBlock } from "sanity";

export type Experience= {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    position: string;
    company: string;
    urlCompany : string;
    description : PortableTextBlock[];
    roles: string[];
    achievement: string[];
    technologies: string[];
    from : Date;
    fromDisplay : string;
    to: string;
    hidden: boolean;
    active: boolean;

   
}