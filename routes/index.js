var express = require('express');
var router = express.Router();
const Article = require('../models/article.models');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/blog/', function (req, res, next) {
  Article.find()
    .then((articles) => res.render('blog', { articles: articles }))
    .catch((err) => res.status(200).json(err));
});

module.exports = router;
