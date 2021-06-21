import { makeExecutableSchema } from '@graphql-tools/schema'
import {resolvers} from "./resolvers"
import buildSchema from "graphql"

//Define qué se puede consultar

//Tipos de graphql (Strings, Int, Float, Boolean, ID)
//En la sintaxis graphql no uso comas
//La ! es para que sea requerido
//Es similar a la ruta en REST

const typeDefs = `
    type Query {
        hello: String
        myAge: Int
        greet(name:String!):String
    }
`

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})

