import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:49153/mongodbgraphql", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("db is connected");
  } catch (e) {
    console.log("Something went grong connecting the db");
    console.log(e);
  }
}

process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    console.log("Mongoose disconnected on app termination");
    process.exit(0);
  });
});
