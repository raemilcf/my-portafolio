const presentation ={
    name: "presentation",
    title: "Presentation",
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
        name: "version",
        title:"Version",
        type:'number',
    },
  
    {
        name:'header',
        title: "Header",
        type: "string",
    },
    {
        name:'content',
        title: "Content",
        type: "array",
        of:[{type: "block"}]
    },
    {
        name:'photo',
        title: "Profile Photo",
        type: "image"
    },
    {
        name: 'technologies',
        title: 'Technologies',
        type: 'array',
        of: [{type: 'string'}]
    }

]
}

export default presentation;