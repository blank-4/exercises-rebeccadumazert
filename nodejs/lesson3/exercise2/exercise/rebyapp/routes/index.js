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
    error.push("Veuillez saisir un prénom entre 0 et 30 caractères")    
  }
  if (req.body.firstname.length < 0 || req.body.firstname.length > 30 ){
    error.push("Veuillez saisir un prénom entre 0 et 30 caractères")    
  }
  if (!email) {
    error.push("Merci d'entrer votre email")
  } else if (email.indexOf("@") == -1) {
    error.push("L'email saisi n'est pas valide ! Merci d'inscrire un fucking @ petit tricheur")
  }
  res.render("index", { tartifkette: error });
});

  router.get('/tartiflette', function(req, res, next){
  res.render('password', { title: 'PassWordConfirmation', errors:[] });
  })
  
  router.post('/formulaire', function(req, res, next){
  var error = [], 
  pass1 = req.body.passw1, 
  pass2 = req.body.passw2
  user = req.body.username;
  if(pass1 !== pass2) {
    error.push("Les deux mots de passes ne sont pas identiques !")
  }
  if(!user){
    error.push("Merci de renseigner votre nom d'utilisateur")
  }
  res.render('password', { errors : error })
  });

module.exports = router;