
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const port = 3001;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('../db/Index.js');


app.use(morgan());
// app.use('/:id', express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());//http-proxy-middleware instead of cors?


// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });


app.use(express.static(path.join(__dirname, '../dist')));


app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});


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


// app.get(‘*’, (req, res) => {
//   res.sendFile(path.join(__dirname, ‘../dist’, ‘index.html’));
// });




// module.exports.GetAllUpdates = GetAllUpdates;


app.listen(port, () => console.log(`listening at http://ec2204236252122-gu9hddd.compute-1.amazonaws.com:${port}`))
