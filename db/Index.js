// mysql
// .createConnection({
//   user: DATABASE_USER,
//   password: DATABASE_PASSWORD
// })
// .then((sqlConnection) => {
//   sqlConnection
//     .query(`CREATE DATABASE IF NOT EXISTS ${DATABASE_NAME};`)
//     .then(() => {
//       // Connect to sequelize here!
//      })


const { Sequelize, DataTypes, Model } = require('sequelize');


const sequelize = new Sequelize('kickstarter', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(function(errors) {
    console.log('Connection has been established successfully.')
  })
  .catch(function(errors) {console.log('Unable to connect to the database:', error)})

class Update extends Model {}
Update.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  likes: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  campaignID: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
}, {
  sequelize,
  modelName: 'Update',
});

const Comment = sequelize.define('Comment', {
  // Model attributes are defined here

  updateID: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'Comment',
});

sequelize.sync();

module.exports.Update = Update;
module.exports.Comment = Comment;