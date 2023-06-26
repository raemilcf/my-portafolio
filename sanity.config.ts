import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas";


const sanityConfig = defineConfig({
    projectId: "bje0gd1r",
    dataset:"production",
    title:"my professional portafolio",
    apiVersion: "2023-06-26",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: schemas}
})

export default sanityConfig;

//schemas trae todos los schemas que lleva nuestra db