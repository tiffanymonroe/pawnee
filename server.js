//Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Staff = require('./api/staff.js');
const parksStaff = require('./api/parks.js');

//Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('/api'));



//Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/staff');
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});


//Index Route
app.get('/api/staff', (req, res) => {
  Staff.find({}, (err, allStaff) => {
      return allStaff
  });
});


//Add Seed Data
// Staff.collection.insertMany(parksStaff, (error, data) => {
// console.log('dammit, Jerry!');
// });

app.listen(1817, () => {
  console.log("You're 5000 candles in the wind");
});
