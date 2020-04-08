import React from 'react';
import Cube from './components/Cube';
import Header from './components/Header';
import MovesPanel from './components/MovesPanel';
import './App.scss';
import MovesList from './components/MovesList';
import Footer from './components/Footer';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <div className="App__content">
        <Cube />
        <MovesPanel />
        <MovesList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
