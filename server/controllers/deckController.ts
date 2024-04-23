import { Request, Response } from 'express';
import Deck from '../models/Deck';

export async function createDeckController(req: Request, res: Response) {
  const newDeck = new Deck({
    title: req?.body?.title,
  });

  console.log('1.', newDeck);
  const createdDeck = await newDeck.save();
  console.log('2.', createdDeck);
  res.json(createdDeck);
}
