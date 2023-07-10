const projects ={
    name: "projects",
    title: "Projects",
    type: "document",
    fields: [{
        name: "title",
        title:"Title",
        type:'string',
    },
    {
        name: "type",
        title:"Type",
        type:'string',
    },
    {
        name:'description',
        title: "Description",
        type: "array",
        of:[{type: "block"}]
    },
    {
        name: 'technologies',
        title: 'Technologies',
        type: 'array',
        of: [{type: 'string'}]
    },
    {
        name: 'url',
        title: 'URL',
        type: 'url',
    },
    {
        name: 'github',
        title: 'Github',
        type: 'url',
    },
    {
        name: "hidden",
        title:"Hidden",
        type:'boolean',
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options : {
            source: 'title',
            maxLength: 96,
        }
    }

]
}

export default projects;