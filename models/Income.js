const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
  description: String,
  amount: Number,
  date: { type: Date, default: Date.now }
});

const Income = mongoose.model('Income', IncomeSchema);
module.exports = Income;
