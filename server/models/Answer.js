const mongoose = require('mongoose');

const { Schema } = mongoose;

const answerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Order = mongoose.model('Question', answerSchema);

module.exports = Order;
