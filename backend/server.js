const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const dbname = "acmefit";
const dbhost = process.env.CATALOG_DB_HOST;
const dbport = process.env.CATALOG_DB_PORT;
const dbuser = process.env.CATALOG_DB_USERNAME;
const dbpass = process.env.password;
const dburl = 'mongodb://' + dbuser + ':' + dbpass + '@' + dbhost + ':' + dbport + '/' + dbname;

var db;
MongoClient.connect(dburl, (err, database) => {
  db = err? null : database.db(dbname);
});

app.get('/', (req, res) => {
  db.collection("catalog").find({}).toArray((err, docs) => {
    res.json(err? err : docs);
  });
});

const port = 3000;
app.listen(port, () => {
  console.log('listen: ' + port);
});