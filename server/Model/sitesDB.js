const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sitesSchema = new Schema({
    Site_Name : String
});

// create a model for the conctractorSchema

const sites = mongoose.model('sitesData', sitesSchema, 'Contractor');

module.exports = sites;