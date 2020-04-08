import React from 'react';
import './Game.scss';
import Cube from '../../components/Cube';
import MovesPanel from '../../components/MovesPanel';
import MovesList from '../../components/MovesList';

const Game = () => (
  <div className="Game">
    <Cube />
    <MovesPanel />
    <MovesList />
  </div>
);

export default Game;
