const page ={
    name: "page",
    title: "Pages",
    type: "document",
    fields: [{
        name: "title",
        title:"Title",
        type:'string',
    },
    {
        name: "header",
        title:"Header",
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
        name:'content',
        title: "content",
        type: "array",
        of:[{type: "block"}]
    },
    {
        name:'email',
        title: "email",
        type: "email"
    }


]
}

export default page;