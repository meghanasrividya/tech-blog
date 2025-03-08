const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const Post = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Relationship: A user can have many posts
User.hasMany(Post, { onDelete: "CASCADE" });
Post.belongsTo(User);

module.exports = Post;
