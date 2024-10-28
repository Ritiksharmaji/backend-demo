const Income = require('../models/Income');

// Add income
exports.addIncome = async (req, res) => {
  try {
    const income = await Income.create(req.body);
    res.status(201).json(income);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add income', error: err.message });
  }
};

// Get incomes
exports.getIncomes = async (req, res) => {
  try {
    const incomes = await Income.find();
    res.status(200).json(incomes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch incomes', error: err.message });
  }
};
