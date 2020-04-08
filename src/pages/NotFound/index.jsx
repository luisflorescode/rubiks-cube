import React from 'react';
import './NotFound.scss';
import { ReactComponent as IceCubeSVG } from '../../assets/static/svg/ice-cube.svg';

const NotFound = () => (
  <section className="NotFound">
    <h1 className="NotFound__title">
      Oops, this is not the cube you want!
      <span role="img" aria-label="scare">
        😱
      </span>
    </h1>
    <IceCubeSVG className="NotFound__img" />
  </section>
);

export default NotFound;
