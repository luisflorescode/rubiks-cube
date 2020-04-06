import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMove } from '../../redux/cubeDuck';
import './Move.scss';

const Move = ({
  move, image, moves, addMoveAction,
}) => {
  const applyMove = () => {
    const newMoves = moves;
    newMoves.push(move);
    addMoveAction(newMoves);
  };

  return (
    <button onClick={applyMove} className="Move" type="button">
      <img className="Move__img" src={image} alt="Move representation" />
      <figure className="Move__text">{move}</figure>
    </button>
  );
};

const mapStateToProps = (reducers) => ({
  moves: reducers.cube.moves,
});

Move.propTypes = {
  move: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  moves: PropTypes.instanceOf(Array).isRequired,
  addMoveAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { addMoveAction: addMove })(Move);
