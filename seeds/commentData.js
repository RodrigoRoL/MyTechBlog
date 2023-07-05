const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "I like the article!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "I don't agree with you!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "I disagree with you!",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "I like your thoughts",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "Can you add more info?",
    user_id: 5,
    post_id: 1,
  },
  {
    comment_text: "I would like to suggest something to you",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "Let's discuss this",
    user_id: 2,
    post_id: 2,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;