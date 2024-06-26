'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.deleteDeckCard =
  exports.createDeckCard =
  exports.deleteDeck =
  exports.getDeck =
  exports.getDecks =
  exports.createDeck =
    void 0;
const Deck_1 = __importDefault(require('../models/Deck'));
// create a new Deck
function createDeck(req, res) {
  return __awaiter(this, void 0, void 0, function* () {
    var _a;
    const newDeck = new Deck_1.default({
      title:
        (_a = req === null || req === void 0 ? void 0 : req.body) === null ||
        _a === void 0
          ? void 0
          : _a.title,
    });
    const createdDeck = yield newDeck.save();
    res.json(createdDeck);
  });
}
exports.createDeck = createDeck;
// get all the deck cards
function getDecks(req, res) {
  return __awaiter(this, void 0, void 0, function* () {
    const decks = yield Deck_1.default.find({});
    res.json(decks);
  });
}
exports.getDecks = getDecks;
// get single deck card
function getDeck(req, res) {
  return __awaiter(this, void 0, void 0, function* () {
    const { deckId } = req.params;
    const deck = yield Deck_1.default.findById(deckId);
    res.json(deck);
  });
}
exports.getDeck = getDeck;
// delete a deck card
function deleteDeck(req, res) {
  return __awaiter(this, void 0, void 0, function* () {
    const deckId = req.params.deckId;
    const deck = yield Deck_1.default.findByIdAndDelete(deckId);
    res.json(deck);
  });
}
exports.deleteDeck = deleteDeck;
// create a new deck card
function createDeckCard(req, res) {
  return __awaiter(this, void 0, void 0, function* () {
    const deckId = req.params.deckId;
    const deck = yield Deck_1.default.findById(deckId);
    if (!deck) return res.status(400).send('no deck of this id exists');
    const { text } = req.body;
    deck.cards.push(text);
    yield deck.save();
    res.json(deck);
  });
}
exports.createDeckCard = createDeckCard;
// delete a deck from the cards
function deleteDeckCard(req, res) {
  return __awaiter(this, void 0, void 0, function* () {
    const deckId = req.params.deckId;
    const index = req.params.index;
    const deck = yield Deck_1.default.findById(deckId);
    if (!deck) return res.status(400).send('no deck of this id exists');
    deck.cards.splice(parseInt(index), 1);
    yield deck.save();
    res.json(deck);
  });
}
exports.deleteDeckCard = deleteDeckCard;
