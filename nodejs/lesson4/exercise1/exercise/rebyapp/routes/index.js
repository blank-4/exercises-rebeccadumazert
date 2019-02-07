var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  var name = 'Rebibi';
  var value = retournDate;
  var options = {
  expires: new Date(Date.now() + 900000),
  httpOnly: true
};

  res.cookie(name, value, options);
  res.render('index', { title: 'Express' });
});

router.get('/cookie', function(req, res, next){
  var reCookie = Number(req.cookies['Rebibi']);
  var d = new Date(reCookie );
  if(req.cookies['Rebibi']==undefined){
   var message = "jamais"
  }
  res.render('cookie', { 'message': message, 'daay' : d.getDate(), 'month' : d.getMonth(), 'year' : d.getFullYear() });
});

function retournDate() {
  var d = new Date();
  return d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() 
}
module.exports = router;
