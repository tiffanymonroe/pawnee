//Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Staff = require('./staff.js')
const parksStaff = require('./parksStaff')


//Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

Index Route
app.get('/api', (req, res) => {
  Staff.find({}, (error, allStaff) => {
    console.log(error);
    res.render('index.html', {
      staff: allStaff
    });
  });
});

//Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/staff');
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

//Add Seed Data
// Staff.collection.insertMany(parksStaff, (error, data) => {
//   console.log('dammit Jerry!');
// });

app.listen(4000, () => {
  console.log("You're 5000 candles in the wind.");
});
