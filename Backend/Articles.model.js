const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articles = new Schema ({
    lenguage: {type: String, required: true},
    name: {type: String, required: true},
    category: {type: String, required: true},
    subcategory: {type: String, required: true},
    location: {type: String, required: true},
    logo: {type: String, required: true},
    photo: {type: String, required: true},
    text: {type: String, required: true}
},{
    timestamps: true,
});

const Articles = mongoose.model('Articles', articles);
module.exports = Articles;
