const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timeLine = new Schema({
    lenguage: {type: String, required: true},
    image: {type: String, required: true},
    category: {type: String, required: false},
    name: {type: String, required: false},
    location: {type: String, required: false},
    businessName: {type: String, required: false},
    description: {type: String, required: false},
    begin: {type: Date, required: false},
    end: {type: Date, required: false},
},{
    timestamps: true,
});

const TimeLine = mongoose.model('TimeLine', timeLine);
module.exports = TimeLine;
