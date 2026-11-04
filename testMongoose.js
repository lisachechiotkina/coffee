const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/coffee');

var Coffee = require('./models/coffee.js').Coffee;

var coffee = new Coffee({
  title: "Эспрессо",
  nick: "espresso_test",
  avatar: "/images/espresso.png",
  desc: "Тестовое описание"
});

coffee.save()
  .then(() => console.log("Сохранено!"))
  .catch(err => console.error(err));