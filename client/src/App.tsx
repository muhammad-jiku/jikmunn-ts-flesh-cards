import React from 'react';
// external import
import { Route, Routes } from 'react-router-dom';
// internal imports
import './App.css';
import { Deck, Decks, Header } from './components';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Decks />} />
        <Route path='/decks/:deckId' element={<Deck />} />
      </Routes>
    </div>
  );
}

export default App;
