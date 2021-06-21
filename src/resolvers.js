
//Aquí le decimos qué hacer cuando llegue una consulta
//Aquí creamos funciones
//Es similar al controlador en REST

export const resolvers = {
    Query:{
        hello: () => {
            return "Hello World with Graphql"
        },
        myAge(){
            return 25
        },
        greet(root, {name} ){
           console.log(name) 
           return `Hello ${name}!`
        }
    }
}