var express = require('express');
var router = express.Router();
const MongoClient=require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/submit",(req,res)=>{
  console.log(req.body);
 var client=new MongoClient("mongodb://localhost:27017")
 client.connect()
  console.log("Connected");
 client.db("Express").collection("user").insertOne(req.body)


  res.send("Form Submitted"); });


module.exports = router;
