
//Aquí le decimos qué hacer cuando llegue una consulta
//Aquí creamos funciones

export const resolvers = {
    Query:{
        hello: () => {
            return "Hello World with Graphql"
        }
    }
}