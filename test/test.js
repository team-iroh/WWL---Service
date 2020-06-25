const server = require('../server/index.js');
const db = require('../db/seedData.js');
require('mysql2/node_modules/iconv-lite').encodingExists('foo');

// Note: Need to make everything promises to run tests...


//////////////////////////////////////////////////
/////////////////Server Tests/////////////////////
//////////////////////////////////////////////////


//////////////////////////////////////////////////
/////////////////Database Tests///////////////////
//////////////////////////////////////////////////

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

