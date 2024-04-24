"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deckRoute = void 0;
const express_1 = __importDefault(require("express"));
const deckController_1 = require("../controllers/deckController");
exports.deckRoute = express_1.default.Router({
    caseSensitive: true,
});
exports.deckRoute.route('/decks').get(deckController_1.getDecks).post(deckController_1.createDeck);
exports.deckRoute.route('/decks/:deckId').get(deckController_1.getDeck).delete(deckController_1.deleteDeck);
exports.deckRoute.route('/decks/:deckId/cards').post(deckController_1.createDeckCard);
exports.deckRoute.route('/decks/:deckId/cards/:index').delete(deckController_1.deleteDeckCard);
