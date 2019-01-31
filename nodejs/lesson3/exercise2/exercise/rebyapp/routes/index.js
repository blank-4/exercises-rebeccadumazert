var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', tartifkette: [] });
});

router.post('/form', function(req, res, next){
  var error = [], email = req.body.email;
  if (req.body.age < 0 || req.body.age > 99) {
    error.push("on n'accepte pas les embryons ni les cadavres")
  }
  if (req.body.lastname.length < 0 || req.body.lastname.length > 30 ){
    error.push("Veuillez saisir un prénom entre 0 et 3à caractères")    
  }
  if (req.body.firstname.length < 0 || req.body.firstname.length > 30 ){
    error.push("Veuillez saisir un prénom entre 0 et 3à caractères")    
  }
  if (!email) {
    error.push("Merci d'entrer votre email")
  } else if (email.indexOf("@") == -1) {
    error.push("L'email saisi n'est pas valide ! Merci d'inscrire un fucking @ petit tricheur")
  }
  res.render("index", { tartifkette: error });
})
module.exports = router;
