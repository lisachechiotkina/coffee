var express = require('express');
var router = express.Router();
var Coffee = require('../models/coffee').Coffee; // <-- Подключили модель

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с coffees');
});

/* Страница кофе */
router.get("/:nick", async function(req, res, next) {
  var drinks = await Coffee.find({nick: req.params.nick});
  if(!drinks.length) return next(new Error("Нет такого кофе в базе"));
  var drink = drinks[0];
  res.render('coffee', {
    title: drink.title,
    picture: drink.avatar,
    desc: drink.desc
  });
});

module.exports = router;