const mongoose = require('mongoose');

const dustbinInstallerSchema = new mongoose.Schema({
  Emoji: {
    type: String,
    required: true,
  },
  Position: {
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
  IconName: {
    type: String,
    required: true,
  },
  Area: {
    type: String,
    required: true,
  },
  Notes: {
    type: String,
  },
  Condition: {
    type: String,
    required: true,
  },
  Icon: {
    type: String,
    // You can customize this based on how you want to store the icon (e.g., file path or URL).
  },
  Distance: {
    type: Number,
    required: true,
  },
  Id: {
    type: String,
    required: true,
    unique: true,
  },
});

const DustbinInstaller = mongoose.model('DustbinInstaller', dustbinInstallerSchema);

module.exports = DustbinInstaller;
