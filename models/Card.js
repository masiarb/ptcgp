const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  cardID: String,
  cardName: String,
  cardSet: String,
  cardNumber: Number,
  cardPack: String,
  cardColor: {
    type: String,
    enum: ['Colorless', 'Fire', 'Water', 'Psychic', 'Lightning', 'Grass', 'Metal', 'Fairy', 'Darkness', 'Dragon', 'Fighting']
  },
  cardType: {
    type: String,
    enum: ['Pokémon', 'Item', 'Supporter']
  },
  rarity: {
    type: String,
    enum: ['Common', 'Uncommon', 'Rare', 'Double Rare', 'Illustration Rare', 'Special Illustration Rare', 'Immersive Card', 'Hyper Rare', 'Promo']
  },
  cardHP: Number,
  attackName: String, //TODO: cards can have more than one attack... define schema for attacks and array of attacks here?
  attackEffect: String,
  attackDamage: Number, //DEFINE SCHEMA FOR COLORS?
  pokemonAbilityName: String,
  pokemonAbilityText: String,
  cardText: String,
  cardImageURL: String,
  cardIllustrator: String,
  pokedexNumber: Number,
}, { timestamps: true });

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
