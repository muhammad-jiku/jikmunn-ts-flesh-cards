import { useEffect, useState } from 'react';
// external import
import { Link } from 'react-router-dom';
// internal imports
import { TDeck } from '../types';
import { deleteDeck, getDecks } from '../api';
import styles from '../styles/Decks.module.css';
import DeckForm from './DeckForm';

export default function Decks() {
  const [decks, setDecks] = useState<TDeck[]>([]);

  async function handleDeleteDeck(deckId: string) {
    await deleteDeck(deckId);
    setDecks(decks.filter((deck) => deck._id !== deckId));
  }

  useEffect(() => {
    async function fetchDecks() {
      const newDecks = await getDecks();
      setDecks(newDecks);
    }
    fetchDecks();
  }, []);

  return (
    <div>
      <h1>Your Decks</h1>
      <ul className={`${styles.decks}`}>
        {decks.map((deck) => (
          <li key={deck._id}>
            <button onClick={() => handleDeleteDeck(deck._id)}>X</button>

            <Link to={`decks/${deck._id}`}>{deck.title}</Link>
          </li>
        ))}
      </ul>
      <DeckForm />
    </div>
  );
}
