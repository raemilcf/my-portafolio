import { PortableTextBlock } from "sanity";

export type Projects= {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    type: string;
    description:  PortableTextBlock[];
    technologies: string[];
    url: string;
    github: string;
    hidden : boolean;
}