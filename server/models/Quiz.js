const {
    Schema, model
} = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const quizSchema = new Schema({
    score: {
        type: String,
        required: true,

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