import { Request, Response } from 'express';
import Deck from '../models/Deck';

// create a new Deck
export async function createDeck(req: Request, res: Response) {
  const newDeck = new Deck({
    title: req?.body?.title,
  });

  console.log('1.', newDeck);
  const createdDeck = await newDeck.save();
  console.log('2.', createdDeck);
  res.json(createdDeck);
}

// get all the deck cards
export async function getDecks(req: Request, res: Response) {
  const decks = await Deck.find({});
  console.log('3.', decks);
  res.json(decks);
}

// get single deck card
export async function getDeck(req: Request, res: Response) {
  const { deckId } = req.params;
  console.log('4.', deckId);
  const deck = await Deck.findById(deckId);
  console.log('5.', deck);
  res.json(deck);
}

// delete a deck card
export async function deleteDeck(req: Request, res: Response) {
  const deckId = req.params.deckId;
  console.log('6.', deckId);
  const deck = await Deck.findByIdAndDelete(deckId);
  console.log('7.', deck);
  res.json(deck);
}

// create a new deck card
export async function createDeckCard(req: Request, res: Response) {
  const deckId = req.params.deckId;
  console.log('8.', deckId);
  const deck = await Deck.findById(deckId);
  console.log('9.', deck);
  if (!deck) return res.status(400).send('no deck of this id exists');
  const { text } = req.body;
  console.log('10.', text);
  deck.cards.push(text);
  await deck.save();
  console.log('11.', deck);
  res.json(deck);
}
