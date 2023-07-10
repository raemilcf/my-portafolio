import { PortableTextBlock } from "sanity";

export type Projects= {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    content : PortableTextBlock[];
}