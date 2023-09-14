const mongoose = require('mongoose');

const WorkerSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: String,
    required: true,
  },
  Role: { //truckdriver cleaner
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true, // Ensure email addresses are unique
  },
  Area: {
    type: String,
    required: true,
  },

});

const Worker= mongoose.model('Worker', WorkerSchema);

module.exports = Worker;
