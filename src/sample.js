export const tasks = [
    {
        _id: 0,
        title: "Do homework",
        description: "lorem ipsum",
        number: 100
    },
    {
        _id: 1,
        title: "Run",
        description: "lorem ipsum",
        number: 100
    },
    {
        _id: 2,
        title: "Sleep",
        description: "lorem ipsum",
        number: 100
    }
]

/*Para hacer consultas
Ejemplo para crear:
mutation {
  createTask(input:{
    title:"Task Four"
    description:"Task Four description"
    number: 400
  }){
    _id
    title
    description 
    number
  }
}

Ejemplo para consultar:
query{
  tasks{
    _id
    title
    description
    number
  }
}

Para consultar un usuario con id

query{
  oneUser(_id: "60d315dc6df178e6a58829cc"){
    firstname
    _id
  }
}
*/