const {
    Schema, model
} = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const quizSchema = new Schema({
    score: {
        type: Number,
        required: true,
    },

    user_email: {
        type: String,
        required: true,
        unique: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
}, 
{
    toJSON: {
        virtuals: true,
        getters: true
      },
      id: false,
  
})

const Quiz = model('Quiz', quizSchema);

module.exports = Quiz;