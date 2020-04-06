import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './MovesPanel.scss';

const MovesPanel = ({ moves }) => (
  <section className="MovesPanel">
    <h2 className="MovesPanel__title">Moves Panel</h2>
    <h3>
      Number of moves:
      {' '}
      <span className="color--orange">{moves.length}</span>
    </h3>
    <h3>
      Moves history
      <br />
      <span className="color--green">
        {!moves.length ? 'No moves.' : moves.join(' ')}
      </span>
    </h3>
  </section>
);

const mapStateToProps = (reducers) => ({
  moves: reducers.cube.moves,
});

MovesPanel.propTypes = {
  moves: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(MovesPanel);
