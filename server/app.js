const express = require('express');
const app = express();
const PORT = 5500;
const HostName = "localhost";
const mongoose = require('mongoose'); // momgoose package

// denis atlas connection to go here
const atlas = "mongodb+srv://jkamau:Thika2024@cluster0.qgkeudp.mongodb.net/Acceptance?retryWrites=true&w=majority&appName=Cluster0"
const router = require('./Router/index');

// connect to mongoDB--Atlas

mongoose.connect(atlas, {
    useNewUrlParser: true,
    useUnifiedTopology : true
})
    .then(res =>{
        app.listen( PORT, HostName , ()=>{
            console.log(`Serever running on ${HostName} : ${PORT}`);
        })
    })
    .catch(err =>console.log(err))

    // request management

    app.use("/", router)
