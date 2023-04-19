const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const giftSchema = new Schema({
  txt: {
    type: String,
    required: true,
  },
  store: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Gift = mongoose.model("Gift", giftSchema);

module.exports = Gift;
