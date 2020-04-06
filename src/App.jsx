import React from 'react';
import Cube from './components/Cube';
import Header from './components/Header';
import Movements from './components/Movements';
import './App.scss';
import MovementsList from './components/MovementsList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__content">
        <Cube />
        <Movements />
        <MovementsList />
      </div>
    </div>
  );
}

export default App;
