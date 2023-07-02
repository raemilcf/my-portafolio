'use client';

import { NextStudio } from 'next-sanity/studio'
import sanityConfig from "@/sanity.config";

//we use nextStudio from sanity to embeded sanity desk cms to add conent
const AdminPage = () => {
    return <NextStudio config={sanityConfig}/>
}

export default AdminPage;