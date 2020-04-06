import React from 'react';
import './Move.scss';
import image from '../../assets/static/images/B-min.png';

const Move = () => (
  <div className="Move">
    <img className="Move__img" src={image} alt="Move representation" />
    <button className="Move__btn" type="button">B</button>
  </div>
);

export default Move;
