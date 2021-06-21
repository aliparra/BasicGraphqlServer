import { makeExecutableSchema } from '@graphql-tools/schema'
import {resolvers} from "./resolvers"
import buildSchema from "graphql"

//Define qué se puede consultar
const typeDefs = `
    type Query {
        hello: String
    }
`

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})

