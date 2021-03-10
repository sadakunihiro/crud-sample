const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())

const MongoClient = require('mongodb').MongoClient;
const dbname = "acmefit";
const dbhost = process.env.CATALOG_DB_HOST;
const dbport = process.env.CATALOG_DB_PORT;
const dbuser = process.env.CATALOG_DB_USERNAME;
const dbpass = process.env.CATALOG_DB_PASSWORD;
const dburl = 'mongodb://' + dbuser + ':' + dbpass + '@' + dbhost + ':' + dbport // + '/' + dbname;
const port = process.env.PORT;

console.log("dburl:", dburl)
var db;
MongoClient.connect(dburl, (err, database) => {
  if (err) {
    console.log("connect db error:",err)
  } else {
    db = database.db(dbname);
  }
});

app.get('/', (req, res) => {
  db.collection("catalog").find({}).toArray((err, docs) => {
    if (err) { console.log("find:",err) }
    res.json(err? "" : docs);
  });
});

app.listen(port, () => {
  console.log('listen: ' + port);
});
