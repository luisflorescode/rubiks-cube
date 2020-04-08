import React from 'react';
import Cube from '../../components/Cube';
import MovesPanel from '../../components/MovesPanel';
import MovesList from '../../components/MovesList';
import './Game.scss';

const Game = () => (
  <div className="Game">
    <Cube />
    <MovesPanel />
    <MovesList />
  </div>
);

export default Game;
