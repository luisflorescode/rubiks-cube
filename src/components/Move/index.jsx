import React from 'react';
import Cube from 'rubiks-cube';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMove, isSolved } from '../../redux/cubeDuck';
import './Move.scss';

const Move = ({
  move, image, initialCube, moves, addMoveAction, isSolvedAction,
}) => {
  const applyMove = () => {
    const newMoves = moves;
    newMoves.push(move);
    addMoveAction(newMoves);
    const cube = Cube.scramble(initialCube.concat(newMoves).join(' '));
    if (cube.isSolved()) {
      isSolvedAction(true);
    }
  };

  return (
    <button onClick={applyMove} className="Move" type="button">
      <img className="Move__img" src={image} alt="Move representation" />
      <figure className="Move__text">{move}</figure>
    </button>
  );
};

const mapStateToProps = (reducers) => ({
  initialCube: reducers.cube.initialCube,
  moves: reducers.cube.moves,
});

Move.propTypes = {
  move: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  initialCube: PropTypes.instanceOf(Array).isRequired,
  moves: PropTypes.instanceOf(Array).isRequired,
  addMoveAction: PropTypes.func.isRequired,
  isSolvedAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  addMoveAction: addMove,
  isSolvedAction: isSolved,
})(Move);
