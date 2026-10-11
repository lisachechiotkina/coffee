var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Эспрессо */
router.get('/espresso', function(req, res, next) {
  res.send("<h1>Страница Эспрессо</h1>")
})

/* Страница Капучино */
router.get('/cappuccino', function(req, res, next) {
  res.send("<h1>Страница Капучино</h1>")
})

/* Страница Латте */
router.get('/latte', function(req, res, next) {
  res.send("<h1>Страница Латте</h1>")
})

module.exports = router;