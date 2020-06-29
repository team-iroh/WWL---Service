//General Setup
const faker = require('faker');
import moment from 'moment';


//Front End Setup
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
// import Index from '../public/index.jsx';
import Updates from '../public/updates.jsx';
import PostComment from '../public/postComment.jsx';
import Comments from '../public/comments.jsx';


//Server Setup
const Server = require('../server/index.js');


//Database Setup
const db = require('../db/seedData.js');
require('mysql2/node_modules/iconv-lite').encodingExists('foo');


//////////////////////////////////////////////////
/////////////////Front End Tests/////////////////////
//////////////////////////////////////////////////

//Outstanding- Figure out how to test the index, Add more tests to the other components, refine the test to the updates component

describe('Comments Component', () =>{
  it('renders without crashing', () => {
    shallow(<Comments comment={[{},{}]} />);
  });
})

describe('PostComment Component', () =>{
  it('renders without crashing', () => {
    shallow(<PostComment post={[{},{}]} />);
  });
})



describe('Updates Component', () =>{
  it('renders without crashing', () => {
    shallow(<Updates update={[{},{}]} />);
  });
  it('renders the update "correctly"', () => {
    var updateObject = {
       title: 'Test Title',
       author: 'Test Author',
       body: 'Test Body',
       date: '2020-06-26T18:32:14.000Z',
       image: faker.image.imageUrl(),
       likes: '100',
    };
    const wrapper = shallow(<Updates update={updateObject} />);
    const title = wrapper.find('div UpdateTitle');
    const body = wrapper.find('div UpdateBody');
    const likes = wrapper.find('div UpdateLikes');
    expect(title.text()).toBe('Test Title');
    expect(body.text()).toBe('Test Body');
    expect(likes.text()).toBe('100 people like this update');
  });
})



//////////////////////////////////////////////////
/////////////////Server Tests/////////////////////
//////////////////////////////////////////////////

// Note: Outstanding Need to make everything promises to run tests through circle CI. Maybe need to create a before each/after each to connect/disconnect the server.
describe('Server', () => {
  test('Retrieves Updates', () => {
    expect(Server.GetAllUpdates).toBeInstanceOf(Function);
  });
})


//////////////////////////////////////////////////
/////////////////Database Tests///////////////////
//////////////////////////////////////////////////

// Note: Outstanding Need to make everything promises to run tests through circle CI. Maybe need to create a before each/after each to connect/disconnect the server.

describe('DB Updates', () => {
  test('insertSampleUpdates is a function', () => {
    expect(db.insertSampleUpdates).toBeInstanceOf(Function);
  });
})

describe('DB Comments', () => {
  test('insertSampleComments is a function', () => {
    expect(db.insertSampleComments).toBeInstanceOf(Function);
  });
})

