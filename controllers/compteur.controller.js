const Compteur = require('../models/compteur.models');

exports.list = (req, res) => {
  Compteur.find()
    .then((compteurs) => res.render('compteur-de-rangs', { compteurs: compteurs }))
    .catch((err) => res.status(200).json(err));
};
