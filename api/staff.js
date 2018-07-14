const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: String,
  title: String,
  department: String,
  quote: String,
  img: String
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
