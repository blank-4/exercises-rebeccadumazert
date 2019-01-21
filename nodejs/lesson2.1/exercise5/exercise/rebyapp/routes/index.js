var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var tableau = []; 
  tableau = fs.readdirSync('./public/images');
  var jsonRes = JSON.stringify(tableau);
  console.log('élément du tableau'+ tableau);
  res.render('result', 
  { 
    title: 'Express',
    json: jsonRes,
    result: tableau
    });
});

module.exports = router;