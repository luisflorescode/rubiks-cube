import React from 'react';
import Cube from './components/Cube';
import Header from './components/Header';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__content">
        <Cube />
      </div>
      <h1>Work in progress</h1>
      <p>Rubik&apos;s cube game in development...</p>
    </div>
  );
}

export default App;
