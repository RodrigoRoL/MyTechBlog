const seedUsers = require("./userData");
const seedPosts = require("./postData");
const seedComments = require("./commentData");


const sequelize = require("../config/connection");


const seedAll = async () => {
  await sequelize.sync({ force: true });
  // Calling each of the seed data functions
  await seedUsers();
  await seedPosts();
  await seedComments();
  process.exit(0);
};
//seed the database
seedAll();