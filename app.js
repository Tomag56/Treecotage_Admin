var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// const Article = require('./models/article.models');
// const Compteur = require('./models/compteur.models');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Connexion à MongoDB Atlas
const mongoose = require('mongoose');
mongoose
  .connect('mongodb+srv://tomag56:42cayxh56@cluster0.msixe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// let compteur = new Compteur({
//   compteurPrincipal: 0,
//   compteur2: 0,
//   compteur3: 0,
//   compteur4: 0,
// });

// let article = new Article({
//   title: 'Comment tricoter ses premières mailles ?',
//   introduction:
//     'Monter ses mailles est le premier pas pour débuter un projet, découvrez avec nous comment faire ! Apprenez pas-à-pas comment faire grâce à notre vidéo explicative !',
//   content: 'lorem*6',
//   publishedAt: Date.now(),
//   image: '../images/TricotLifestyle/PullCiel.jpg',
// });

// compteur
//   .save()
//   .then(() => console.log('Sauvegarde Réussi !! '))
//   .catch(() => console.log('Sauvegarde échouée !'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
