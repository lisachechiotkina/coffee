var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Эспрессо */
router.get('/espresso', function(req, res, next) {
  res.render('coffee', {
    title: "Эспрессо",
    picture: "images/espresso.png",
    desc: "Крепкий итальянский напиток. Готовится путём продавливания горячей воды под давлением через молотый кофе. Основа всех кофейных напитков. Подаётся в маленькой чашке 30–40 мл."
  })
})

/* Страница Капучино */
router.get('/cappuccino', function(req, res, next) {
  res.render('coffee', {
    title: "Капучино",
    picture: "images/cappuccino.jpeg",
    desc: "Итальянский напиток на основе эспрессо с добавлением взбитого молока и молочной пены. Классическая пропорция — 1/3 эспрессо, 1/3 молока, 1/3 пены."
  })
})

/* Страница Латте */
router.get('/latte', function(req, res, next) {
  res.render('coffee', {
    title: "Латте",
    picture: "images/latte.png",
    desc: "Мягкий напиток с большим количеством молока. В чашке 200–250 мл: один шот эспрессо и горячее молоко с тонким слоем пены. Часто украшается латте-артом."
  })
})

module.exports = router;