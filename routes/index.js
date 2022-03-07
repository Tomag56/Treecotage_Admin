var express = require('express');
var router = express.Router();
const articleController = require('../controllers/article.controller');
const compteurController = require('../controllers/compteur.controller');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/blog', articleController.list);
router.get('/blog/:id', articleController.show);
router.get('/nouvelle-article', articleController.nouvellearticle);

router.get('/compteur-de-rangs', compteurController.list);

router.get('/profil', function (req, res, next) {
  res.render('profil');
});

module.exports = router;
