import React from 'react';
import './Movements.scss';

const Movements = () => (
  <section className="Movements">
    <h2 className="Movements__title">Movements</h2>
    <h3>
      Number of movements:
      {' '}
      <span className="color--red">2</span>
    </h3>
    <h3>
      Movement history
      <br />
      <span className="color--green">
        U&apos; D&apos; L U&apos; D&apos;
      </span>
    </h3>
  </section>
);

export default Movements;
