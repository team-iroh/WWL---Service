
const express = require('express')
const app = express()
const port = 3001
const morgan = require('morgan')
const bodyParser = require('body-parser')


const db = require('../db/index.js');
// const Comment = require('../db/index.js');



app.use(morgan())
app.use('/', express.static('dist'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

///////////////////////////////////
////////////Routes/////////////////
///////////////////////////////////

//to do Test the code to see if it works
app.get('/api/update/:id', function (req, res) {
  db.Update.findOne({where: {id: req.params.id }})
  .then(function(data){
    res.status(200).send(data);
  })
});


app.get('/api/comments/:id', function (req, res) {
  db.Comment.findOne({where: {id: req.params.id }})
  .then(function(data){
    res.status(200).send(data);
  })
});

app.get('/api/update/', function (req, res) {
  db.Update.findAll()
  .then(function(data){
    res.status(200).send(data);
  })
});

app.get('/api/comments/', function (req, res) {
  db.Comment.findAll()
  .then(function(data){
    res.status(200).send(data);
  })
});

///////////////////////////////////
////////////Routes/////////////////
///////////////////////////////////




app.listen(port, () => console.log(`listening at http://localhost:${port}`))


// Show one or more API calls working with sample data	link to Github Gist (show url and sample json output)