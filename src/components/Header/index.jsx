import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { ReactComponent as LogoSVG } from '../../assets/static/svg/rubik.svg';

const Header = () => (
  <header>
    <Link className="Header" to="/">
      <LogoSVG className="Header__logo" />
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
    </Link>
  </header>
);

export default Header;
