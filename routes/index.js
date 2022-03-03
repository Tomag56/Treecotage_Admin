var express = require('express');
var router = express.Router();
const Article = require('../models/article.models');
const Compteur = require('../models/compteur.models');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/blog/', function (req, res, next) {
  Article.find()
    .then((articles) => res.render('blog', { articles: articles }))
    .catch((err) => res.status(200).json(err));
});

router.get('/profil/', function (req, res, next) {
  res.render('profil');
});

router.get('/compteur-de-rangs/', function (req, res, next) {
  Compteur.find()
    .then((compteurs) => res.render('compteur-de-rangs', { compteurs: compteurs }))
    .catch((err) => res.status(200).json(err));
});

module.exports = router;
