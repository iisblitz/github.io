const mongoose = require("mongoose");

const Schema = mongoose.Schema

const timeLine = new Schema({
    lenguage:{type:String,required:true},
    image:{type:String,required:true},
    category:{type:String, required:false},
    name:{type:String, required:false},
    location:{type:String, required:false},
    businessName:{type:String, required:false},
    description:{type:String, required:false},
    begin:{type:Date, required:false},
    end:{type:Date, required:false},
    },{
    timestamps:true,
    });

const articles = new Schema ({
    lenguage:{type:String,required:true},
    name:{type:String,required:true},
    category:{type:String,required:true},
    subcategory:{type:String,required:true},
    location:{type:String,required:true},
    logo:{type:String,required:true},
    photo:{type:String,required:true},
    text:{type:String,required:true}
},{
    timestamps:true,
    });


    const TimeLine = mongoose.model('timeline',timeLine);
    const Articles = mongoose.model('articles',articles);
    module.exports= TimeLine, Articles;