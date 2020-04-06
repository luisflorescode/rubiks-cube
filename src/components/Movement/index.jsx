import React from 'react';
import './Movement.scss';
import image from '../../assets/static/images/B-min.png';

const Movement = () => (
  <div className="Movement">
    <img className="Movement__img" src={image} alt="Movement representation" />
    <button className="Movement__btn" type="button">B</button>
  </div>
);

export default Movement;
