
//Aquí le decimos qué hacer cuando llegue una consulta
//Aquí creamos funciones
//Es similar al controlador en REST
import {tasks} from "./sample"

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
        },
        tasks(){
           return tasks
        },
    },
    Mutation: {
        //El _ es para decirle que no voy a usar la propiedad root
        createTask(_, {input}){
            console.log(tasks)
            input._id= tasks.length
            tasks.push(input)
            console.log(tasks)
            return input
        }
    }
}