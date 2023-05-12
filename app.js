const express = require("express");
// const mongoose = require("mongoose");
// const session = require("express-session");
// const MongoStore = require("connect-mongo");
const morgan = require('morgan')

const app = express();
app.use(morgan('dev'))
// const dbString = "mongodb://localhost:27017/user-auth";
// const dbOptions = { useNewUrlParser: true };

// const connection = mongoose.createConnection(dbString, dbOptions);
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// const sessionStore = new MongoStore({
//   mongooseSession: connection,
//   collection: session,
// });

// app.use(
//   session({
//     secret: "someSecret",
//     resvae: false,
//     saveUninitialized: true,
//     store: MongoStore.create({  
//         mongoUrl: dbString,
//         // collection: session,
//       }),
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24,
//     },
//   })
// );

app.get('/api/', (req,res, next)=>{
  console.log('I am api shsdvb')
  console.log("I am second", process.env.DB_NAME)
  console.log("I am third")
    res.send('<h1>Hello Word New</h1>')
})

app.get('/api/user', (req,res, next)=>{
  console.log('I am api shsdvb')
  console.log("I am second", process.env.DB_NAME)
  console.log("I am third")
    res.send({name:"dhruva"})
})


app.get('/api/user/name', (req,res, next)=>{
  console.log('I am api shsdvb')
  console.log("I am second", process.env.DB_NAME)
  console.log("I am third")
    res.send({name:"dhruva", lastName:"Vig"})
})

app.listen(3000, ()=>{
    console.log('server is running on port 3000')
});
