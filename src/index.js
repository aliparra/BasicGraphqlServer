
import express from "express"
import { graphqlHTTP } from "express-graphql";
import schema from"./schema"
import {connect} from "./database"

const app = express();
connect()

//Con este middleware le digo que cuando visite esta ruta desde el navegador use graphql para procesar la ruta.

app.get("/", (req,res) => {
    res.json({
        message: "Hello world"
    })
})

//Es un objeto donde le digo todo lo que puedo consultar desde el cliente


app.use("/graphql", graphqlHTTP({ 
    schema: schema,
    //Muestra una herramienta para poder hacer consultas en el navegador y testear, como postman. 
    graphiql: true, 
    //Nos ayuda a pasar datos a todos los resolvers, por ejemplo útil en autenticaciones
    context:{
        messageId: "test"
    }
}))

app.listen(3000, () => console.log("Server on port 3000"))