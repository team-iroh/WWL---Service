const faker = require('faker');
const db = require('../db/index.js');


const insertSampleUpdates = function() {
  for(var i = 0; i < 100; i++) {
    db.Update.create({
      title: faker.lorem.words(),
      author: faker.name.findName(),
      //Will need to return to this to use API calls to Search Results Amazon S3 - Amazon Web Services
      imageUrl: faker.image.imageUrl(),
      createdAt: faker.date.past(),
      body: faker.lorem.paragraph(),
      likes: faker.random.number(),
      commentsID: Math.ceil(Math.random()*100)
    })
  }
};


const insertSampleComments = function() {
  for(var i = 0; i < 100; i++) {
    db.Comment.create({
      userName: faker.name.findName(),
      comment:faker.lorem.sentences(),
      createdAt: faker.date.past(),
    })
  }
};

insertSampleUpdates()
insertSampleComments()


module.exports.insertSampleUpdates = insertSampleUpdates;
module.exports.insertSampleComments = insertSampleComments;