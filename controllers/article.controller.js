const Article = require('../models/article.models');

exports.list = (req, res) => {
  Article.find()
    .then((articles) => res.render('blog', { articles: articles }))
    .catch((err) => res.status(200).json(err));
};

exports.show = (req, res) => {
  Article.findOne({ _id: req.params.id })
    .then((article) => res.render('blog-article', { article: article }))
    .catch((err) => res.redirect('/blog'));
};

exports.nouvellearticle = (req, res) => {
  res.render('nouvelle-article');
};
