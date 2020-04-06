import React from 'react';
import PropTypes from 'prop-types';
import './Move.scss';

const Move = ({ move, image }) => (
  <div className="Move">
    <img className="Move__img" src={image} alt="Move representation" />
    <button className="Move__btn" type="button">{move}</button>
  </div>
);

Move.propTypes = {
  move: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Move;
