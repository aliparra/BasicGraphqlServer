//Aquí le decimos qué hacer cuando llegue una consulta
//Aquí creamos funciones
//Es similar al controlador en REST
import { tasks } from "./sample";
import User from "./models/User";

export const resolvers = {
  Query: {
    hello: () => {
      return "Hello World with Graphql";
    },
    myAge() {
      return 25;
    },
    greet(root, { name }, ctx) {
      console.log(ctx);
      return `Hello ${name}!`;
    },
    tasks() {
      return tasks;
    },
    async Users() {
      return await User.find();
    },
    async oneUser(_,{_id}){
      return await User.findById({_id})
    }
  },
  Mutation: {
    //El _ es para decirle que no voy a usar la propiedad root
    createTask(_, { input }) {
      console.log(tasks);
      input._id = tasks.length;
      tasks.push(input);
      console.log(tasks);
      return input;
    },
    async createUser(_, { input }) {
      const newUser = new User(input);
      await newUser.save();
      return newUser;
    },
    async deleteUser(_, { _id }) {
      return await User.findByIdAndDelete(_id);
    },
    async updateUser(_, { _id, input }) {
      return await User.findByIdAndUpdate(_id, input, { new: true });
    },
  },
};
