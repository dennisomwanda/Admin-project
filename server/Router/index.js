const express = require('express');
const Contractor = require('../Model/SitesDB'); // data stored in mongoDB
const route = express.Router();

route.get('/sites', (req, res) =>{
    Contractor.find()
    .then(response =>{
        res.status(200).json({
            message : "Sites fetched successfully",
            constractor : response
        })
    })
    .catch(err => console.log(err));

})

module.exports = route;