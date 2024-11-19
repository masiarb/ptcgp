const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  cardID: String,
  cardName: String,
  cardSet: String,
  cardNumber: Number,
  cardPack: String,
  rarity: {
    type: String,
    enum: ['Common', 'Uncommon', 'Rare', 'Double Rare', 'Illustration Rare', 'Special Illustration Rare', 'Immersive Card', 'Hyper Rare']
  },
  cardHP: Number,
  cardDamage: Number,
  cardImageURL: String,
}, { timestamps: true });

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
