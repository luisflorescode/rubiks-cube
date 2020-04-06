import React from 'react';
import PropTypes from 'prop-types';
import './Move.scss';

const Move = ({ move, image }) => (
  <button className="Move" type="button">
    <img className="Move__img" src={image} alt="Move representation" />
    <figure className="Move__text">{move}</figure>
  </button>
);

Move.propTypes = {
  move: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Move;
