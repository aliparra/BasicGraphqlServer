# BasicGraphQL Server

## GRAPHQL API BASIC CRUD WITH BABEL, EXPRESS, MONGODB AND MONGOOSE

**About the data base**\
If you want to use the code make sure you change the data base url. I use a different port as I run mongodb on a local docker container.
If you have MongoDb installed on your system try ```'mongodb://localhost:27017/mongodbgraphql'``` or check the mongoose [Connection Guides](https://mongoosejs.com/docs/connections.html).

**Try without a front environment**\
Try querys and mutations at localhost:3000/graphql

| MUTATIONS | QUERIES |
| --- | --- |
| **Create User** | **Show all users**
| **Edit User** | **Show one user by id**
| **Delete User** | 

**Create User** 
```
mutation{
  createUser(input:{
    firstname:"Example Name",
    lastname:"Example lastname",
    age:25
    
  }){
    _id
    firstname
    lastname 
    age
  }
} |
```


**Edit User**
```
mutation{
  updateUser(_id:"Paste the user id here",input:{
    firstname:"Example Name Updated",
    lastname:"Example lastname Updated",
    age:20
    
  }){
    _id
    firstname
    lastname 
    age
  }
}
```

**Delete User**
```
mutation{
  deleteUser(_id:"Paste the user id here"){
    _id
    firstname
    lastname 
    age
  }
}
```

### QUERIES

**Show all users information:**
```
query{
  Users{
    _id
    firstname
    lastname
    age
  }
}
```

**Show one user by id**

```
query{
  oneUser(_id:"Paste the user id here"){
    _id
    firstname
    lastname 
    age
  }
}
```

I followed the instructions of this [tutorial](https://www.youtube.com/watch?v=Wl8O6wW4FJU&list=RDCMUCX9NJ471o7Wie1DQe94RVIg&start_radio=1&rv=Wl8O6wW4FJU&t=2&ab_channel=Fazt).

I added on my own the query show one user by id.

Happy coding 




