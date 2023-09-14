const mongoose = require('mongoose');

const truckSchema = new mongoose.Schema({
  Area: {
    type: String,
    required: true,
  },
  TruckCategory: {
    type: String,
    required: true,
  },
  Worker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Worker', // refers to workermodel
    required: true,
  },
});

const Truck = mongoose.model('Truck', truckSchema);

module.exports = Truck;

