const Mongoose = require("mongoose");

const tradesSchema = new Mongoose.Schema({
  price: Number,
  shares: Number,
  ticker: String,
  ticket: String,
  time: Date,
});

module.exports = Mongoose.model("trades", tradesSchema);
