import React from 'react';
import Cube from './components/Cube';
import Header from './components/Header';
import Movements from './components/Movements';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__content">
        <Cube />
        <Movements />
      </div>
    </div>
  );
}

export default App;
