import React from 'react';
import './Footer.scss';


const Footer = () => (
  <footer className="Footer">
    <div className="Footer__made">
      Made with
      {' '}
      <span role="img" aria-label="heart">💗</span>
      {' '}
      by
      <a
        href="https://luisflores.dev/"
        rel="noopener noreferrer"
        target="_blank"
        className="logo"
      >
        <span className="logo-img">&lt;&gt;</span>
        {' '}
        <span>Luis Flores</span>
      </a>
    </div>
    <div className="Footer__location">
      <span className="color--green">C</span>
      <span className="color--blue">D</span>
      <span className="color--orange">M</span>
      <span className="color--red">X</span>
      , 2020
    </div>
  </footer>
);

export default Footer;
