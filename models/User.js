const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    googleId: {
      type: String,
      required: true,
      unique: true
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      required: true,
      default: Date.now
    }
  });

const user = mongoose.model('User', userSchema);

module.exports = user;


