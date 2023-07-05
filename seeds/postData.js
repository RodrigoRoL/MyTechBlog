const { Post } = require("../models");

const postData = [
  {
    title: "First Post",
    content: "Text of the blog post.",
    user_id: 1,
  },
  {
    title: "Second Post",
    content: "Text of the blog post.",
    user_id: 2,
  },
  {
    title: "Third Post",
    content: "Text of the blog post.",
    user_id: 3,
  },
  {
    title: "Fourth Post",
    content: "Text of the blog post.",
    user_id: 4,
  },
  {
    title: "Fifth Post",
    content: "Text of the blog post.",
    user_id: 5,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;