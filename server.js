var express = require('express');
var app = express();
var mysql = require('mysql');
var path = require('path');

var db = mysql.createConnection({
  host     : 'db4free.net',
  user     : 'aaaa_aaaa_aaaa',
  password : 'aaaaaa',
  database : 'aaaa_aaaa'
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// Creating static path
var __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));

// Setting up the routes
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/save', function(req, res){
    
    var data = req.query.data;

    db.query('INSERT INTO Data(data) VALUES ("'+data+'");', function(err, rows, fields){
        if(err){
            console.log(err);
            res.send('Error in save');
        }
        else{
            res.send('Success. Go to localhost:3005/all to see new entry');
        }
    });
});

app.get('/all', function(req, res){

    var results = [];

    db.query('SELECT * FROM Data;', function(err, rows, fields){
        if(err){
            console.log(err);
            res.send('Error in getting data');
        }
        else{
            for(var i=0; i<rows.length; i++) {
                results.push(rows[i].data);
            }
            res.send(results);
        }
    });
});

app.listen(3005);

console.log('Listening on port 3005...');