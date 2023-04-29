const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;
const uri = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const articleRouter = require('./Articles.model');
const timelineRouter = require('./Timeline.model');

app.use('/article', articleRouter);
app.use('/timeline', timelineRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
