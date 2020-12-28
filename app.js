const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config');

//Import Routes
const userRoute = require('./Routes/Users');

app.use(bodyParser.json());
// router use by middleware

app.use('/users',userRoute);

//ROUTES
app.get('/',(req,res) => {
    res.send("home secreen");
})


//Connect To DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true ,
      useUnifiedTopology: true
    },
    ()=>console.log("Connected to DB")
);

//Listening server
app.listen(port, ()=> {
    console.log("app is listening");
})