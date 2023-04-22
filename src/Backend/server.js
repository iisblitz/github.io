const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require("dotenv").confi
const app = express();
const port = process.env.PORT || 5001

app.use(cors())
app.use(express.json())

console.log(process.env.ATLAS_URI)
const uri = "mongodb+srv://iis_blitz:tnizCAnUiiEEHM6@cluster0.hube4bm.mongodb.net/test";
mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology:true});

const connection = mongoose.connection;
connection.once('open',()=>{console.log("MongoDB database connection established successfully")})


const router = require("./route.js")
app.use('Article.models.js',router)


app.listen(port,()=>{ console.log('connection listen on ' + port)})