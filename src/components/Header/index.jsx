import React from 'react';
import './Header.scss';
import logo from '../../assets/static/images/logo.png';

const Header = () => (
  <header className="Header">
    <img className="Header__logo" src={logo} alt="Logo" />
    <h1 className="Header__title">
      <span className="color--green">R</span>
      <span className="color--white">u</span>
      <span className="color--blue">b</span>
      <span className="color--orange">i</span>
      <span className="color--yellow">k</span>
      <span className="color--red">&apos;s</span>
      {' '}
      Cube Game
    </h1>
  </header>
);

export default Header;
