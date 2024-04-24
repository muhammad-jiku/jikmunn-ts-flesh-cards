// external import
import { Request, Response } from 'express';
// internal import
import Deck from '../models/Deck';

// create a new Deck
export async function createDeck(req: Request, res: Response) {
  const newDeck = new Deck({
    title: req?.body?.title,
  });

  const createdDeck = await newDeck.save();
  res.json(createdDeck);
}

// get all the deck cards
export async function getDecks(req: Request, res: Response) {
  const decks = await Deck.find({});
  res.json(decks);
}

// get single deck card
export async function getDeck(req: Request, res: Response) {
  const { deckId } = req.params;
  const deck = await Deck.findById(deckId);
  res.json(deck);
}

// delete a deck card
export async function deleteDeck(req: Request, res: Response) {
  const deckId = req.params.deckId;
  const deck = await Deck.findByIdAndDelete(deckId);
  res.json(deck);
}

// create a new deck card
export async function createDeckCard(req: Request, res: Response) {
  const deckId = req.params.deckId;
  const deck = await Deck.findById(deckId);
  if (!deck) return res.status(400).send('no deck of this id exists');
  const { text } = req.body;
  deck.cards.push(text);
  await deck.save();
  res.json(deck);
}

// delete a deck from the cards
export async function deleteDeckCard(req: Request, res: Response) {
  const deckId = req.params.deckId;
  const index = req.params.index;
  const deck = await Deck.findById(deckId);
  if (!deck) return res.status(400).send('no deck of this id exists');
  deck.cards.splice(parseInt(index), 1);
  await deck.save();
  res.json(deck);
}
