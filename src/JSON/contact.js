const contact = {
    category: "contact",
    title: "Contact",
    body: [
        {
            category: "input",
            type: "object",
            content: {
                title: "name",
                input: "single"
            }
        },
        {
            category: "input",
            type: "object",
            content: {
                title: "email",
                input: "single"
            }
        },
        {
            category: "input",
            type: "object",
            content: {
                title: "phone",
                input: "single"
            }
        },
        {
            category: "input",
            type: "object",
            content: {
                title: "message",
                input: "multi"
            }
        }
    ]
}

export default contact