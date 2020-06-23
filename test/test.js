const db = require('../db/seedData.js');


describe('Updates', () => {
  test('insertSampleUpdates is a function', () => {
    expect(db.insertSampleUpdates).toBeInstanceOf(Function);
  });
})

describe('Comments', () => {
  test('insertSampleComments is a function', () => {
    expect(db.insertSampleComments).toBeInstanceOf(Function);
  });
})