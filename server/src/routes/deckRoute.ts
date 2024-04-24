import express from 'express';
import {
  createDeck,
  createDeckCard,
  deleteDeck,
  deleteDeckCard,
  getDeck,
  getDecks,
} from '../controllers/deckController';

export const deckRoute = express.Router({
  caseSensitive: true,
});

deckRoute.route('/decks').get(getDecks).post(createDeck);
deckRoute.route('/decks/:deckId').get(getDeck).delete(deleteDeck);
deckRoute.route('/decks/:deckId/cards').post(createDeckCard);
deckRoute.route('/decks/:deckId/cards/:index').get(deleteDeckCard);
