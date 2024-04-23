import React from 'react';
import './App.css';
import { Deck, Decks, Header } from './components';
import { Route, Routes } from 'react-router-dom';

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
