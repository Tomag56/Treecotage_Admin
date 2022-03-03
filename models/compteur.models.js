const mongoose = require('mongoose');

compteurSchema = mongoose.Schema({
  compteurPrincipal: Number,
  compteur2: Number,
  compteur3: Number,
  compteur4: Number,
});

module.exports = mongoose.model('Compteur', compteurSchema);
