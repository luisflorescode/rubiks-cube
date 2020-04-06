import React from 'react';
import './MovesPanel.scss';

const MovesPanel = () => (
  <section className="MovesPanel">
    <h2 className="MovesPanel__title">Moves Panel</h2>
    <h3>
      Number of moves:
      {' '}
      <span className="color--red">2</span>
    </h3>
    <h3>
      Moves history
      <br />
      <span className="color--green">
        U&apos; D&apos; L U&apos; D&apos;
      </span>
    </h3>
  </section>
);

export default MovesPanel;
