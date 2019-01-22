var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index");
});

router.get("/form", (req, res, next) => {
  res.json({ user: req.query.user})
})

router.post('/form', function(req, res, next) {
  res.json({ user2: req.body.user , password2: req.body.pass});
});

module.exports = router;
