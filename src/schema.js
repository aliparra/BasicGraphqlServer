import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";
import buildSchema from "graphql";

//Define qué se puede consultar

//Tipos de graphql (Strings, Int, Float, Boolean, ID)
//En la sintaxis graphql no uso comas
//La ! es para que sea requerido
//Es similar a la ruta en REST

const typeDefs = `
    type Query{
        hello: String
        myAge: Int
        greet(name:String!):String
        tasks: [Task]
        Users: [User]
        
    }

    type Task{
        _id: ID
        title: String!
        description: String!
        number: Int
    }

    type User {
        _id: ID
        firstname: String!
        lastname: String!
        age: Int
    }

    type Mutation{
        createTask(input: TaskInput): Task
        createUser(input: UserInput ): User
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: UserInput) : User
    }
    
    input TaskInput{
        title: String!
        description: String!
        number: Int
    }
    
    input UserInput{
        firstname: String!
        lastname: String!
        age: Int
    }
    
    
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
