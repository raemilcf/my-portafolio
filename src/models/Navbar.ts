import { PortableTextBlock } from "sanity";

export type Navbar= {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    content : PortableTextBlock[];
}