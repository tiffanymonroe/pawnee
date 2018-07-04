//Dependencies
const express = require('express');
const app = express();
const Staff = require('./models/staff.js');
const characterData = require('./models/characters.js');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

//Middleware

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));

//Index Route

app.get('/staff', (req, res) => {
  Staff.find({}, (error, allStaff) => {
    console.log('staff');
    res.render('src/Staff.js', {
      staff: allStaff
    });
  });
});


//Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/staff')
mongoose.connection.once('open', () => {
  console.log("You're 5000 Candles in the Wind.");
})


//Listener
// app.listen(3000, () => {
//   console.log('Treat yo self!');
// });

//Seed Data
// Staff.collection.insertMany(characterData, (error, data)=>{
//   console.log('added staff data');
//   mongoose.connection.close();
// });
