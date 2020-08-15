const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser'); 
var session = require('express-session');
var db = require('./models/db.js');
const { response } = require('express');
//var user = require('./models/user.js');
db.client.on('connect', () => {
    console.log('connected to the db');
  });
  db.client.connect();
const app = express();
app.use(cors());

// Body parser use JSON data
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({
  extended: true
}));

//api start from here
app.get('/', (req, res) => {
    res.json('Hello World, ');
});


//hostname -> context path -> version -> api path
// localhost:3000/Latika/v1/login
app.get('/my-custom-url', function(req, res) {
    console.dir(req)
    res.json('Hello World,my-custom-url ' + req);
})
// REST =>
// POST -> Cretae
// PUT -> Update 
// GET -> Retrieve
// DELETE -> Delete
// server.listen(process.env.PORT||3000);

// Login api
app.post('/login', (req, res) => {
    console.log(req.body) ;
    //console.log(res.body) ;
    db.login(req.body.username, req.body.password, res);  // res.json(data);


})

app.post('/profile', (req, res) => {
    console.log(req.body) ;
    console.log(res.body) ;
    return db.getprofile(req.body.userid, res);  // res.json(data);
})

app.post('/profilehistory', (req, res) => {
    console.log('profilehistory REQ') ;
    console.log(req.body.profile_id) ;
    console.log('profilehistory RES') ;
    console.log(res.body) ;
    return db.getprofileprofilehist(req.body.profile_id, res);  // res.json(data);
})

app.post('/getPaymentSummary', (req, res) => {
    console.log('getPaymentSummary REQ') ;
    console.log(req.body.profile_id) ;
    console.log('getPaymentSummary RES') ;
    console.log(res.body) ;
    return db.getPaymentSummary(req.body.profile_id, res);  // res.json(data);
})


app.listen(3000, () => {
    console.log('App running in port 3000');
})