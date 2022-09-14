import Express from "express";

const app = Express()

app.get('/ads', (request, response) => {
    return response.json([
        {id: 1, name: 'teste1'},
        {id: 2, name: 'teste2'},
        {id: 3, name: 'teste3'},
        {id: 4, name: 'teste4'},
        {id: 5, name: 'teste5'},
    ])
})

app.listen(3333)