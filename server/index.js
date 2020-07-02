
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');

const port = 3001
const morgan = require('morgan')
const bodyParser = require('body-parser')


const db = require('../db/index.js');

app.use(cors())
app.use(morgan())
// app.use('/', express.static('dist'));
app.use('/:id', express.static(path.join(__dirname, '../dist')));

// require('dotenv').config({ path: path.resolve(__dirname, './config/.env') });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

///////////////////////////////////
////////////Routes/////////////////
///////////////////////////////////



// to do Test the code to see if it works
app.get('/api/update/:id', function (req, res) {
  db.Update.findOne({where: {id: req.params.id }})
  .then(function(data){
    res.status(200).send(data);
  })
});


app.get('/api/comment/:id', function (req, res) {
  db.Comment.findAll({where: {updateID: req.params.id }})
  .then(function(data){
    res.status(200).send(data);
  })
});

const GetAllUpdates = app.get('/api/update/', function (req, res) {
  db.Update.findAll()
  .then(function(data){
    res.status(200).send(data);
  })
});

app.get('/api/comment/', function (req, res) {
  db.Comment.findAll()
  .then(function(data){
    res.status(200).send(data);
  })
});

app.post('/api/comment/', function (req, res) {
  db.Comment.create({
    updateID: req.body.updateID,
    userName: req.body.userName,
    comment:req.body.comment,
    createdAt: req.body.createdAt,
  })
  .then(function(){
    res.send('sent to server');
  })
});

///////////////////////////////////
////////////Routes/////////////////
///////////////////////////////////


// module.exports.GetAllUpdates = GetAllUpdates;


app.listen(port, () => console.log(`listening at http://localhost:${port}`))
