const experience ={
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [{
        name: "title",
        title:"Title",
        type:'string',
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options : {
            source: 'title',
            maxLength: 96,
        }
    },
    {
        name:'position',
        title: "Position",
        type: "string",
    },
    {
        name:'company',
        title: "Company",
        type: "string",
    },
    {
        name:'description',
        title: "Company Description",
        type: "array",
        of:[{type: "block"}]
    },
    {
        name:'roles',
        title: "Roles",
        type: "array",
        of : [{type :'string'}]
    },
    {
        name:'achievement',
        title: "Achievements",
        type: "array",
        of : [{type :'string'}]

    },
    {
        name:'from',
        title: "From",
        type: "string"
    },
    {
        name:'to',
        title: "To",
        type: "string"
    },
    {
        name: 'technologies',
        title: 'Technologies',
        type: 'array',
        of: [{type: 'string'}]
    },
    {
        name: "hidden",
        title:"Hidden",
        type:'boolean',
    },
]
}

export default experience;