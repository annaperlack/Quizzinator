const { AuthenticationError } = require('apollo-server-express');
const { User, Quiz } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate('quizzes');

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    quizzes: async (parent, args) => {
      const quizData = await Quiz.aggregate([
        {
          $addFields: {
            average: {
              $divide: [{ $add: ["$score", "$total"] }, 2]
            }
          }
        },
        {
          $sort: { average: -1 }
        }]).limit(20)
      console.log(quizData)
      return quizData
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      console.log('user:', user)
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, {avatar_color}, context) => {
      const user = await User.findByIdAndUpdate(
        context.user._id, {avatar_color}, {new:true}
      )
      return { user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addQuiz: async (parent, {score, total}, context) => {
      const quiz = await Quiz.create({score:score, total:total, user_name: context.user.name});
      const user = await User.findByIdAndUpdate(
        context.user._id,
        { $addToSet:{quizzes: quiz._id}},
        { new: true }
      )
      return user;
    }
  }
};


module.exports = resolvers;
