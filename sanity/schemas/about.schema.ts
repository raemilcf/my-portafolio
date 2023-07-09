const about ={
    name: "about",
    title: "About",
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
        name:'catchPhrase1',
        title: "CatchPhrase1",
        type: "string",
    },
    {
        name:'catchPhrase2',
        title: "CatchPhrase2",
        type: "string",
    },
    {
        name:'content',
        title: "Content",
        type: "array",
        of:[{type: "block"}]
    },
    {
        name:'url',
        title: "Url",
        type: "url"
    }

]
}

export default about;