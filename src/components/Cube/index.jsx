import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Cube.scss';

const Cube = ({ firstScramble }) => (
  <section className="Cube">
    <img
      src={`http://cube.crider.co.uk/visualcube.php?fmt=svg&size=300&alg=${firstScramble.join('')}`}
      alt="Rubik's Cube"
    />
  </section>
);

const mapStateToProps = (reducers) => ({
  firstScramble: reducers.cube.firstScramble,
});

Cube.propTypes = {
  firstScramble: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(Cube);
