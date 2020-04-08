import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Cube.scss';

const Cube = ({ initialCube, moves }) => (
  <section className="Cube">
    <img
      src={`http://cube.crider.co.uk/visualcube.php?fmt=svg&size=300&alg=${initialCube
        .concat(moves)
        .join('')}`}
      alt="Rubik's Cube"
    />
  </section>
);

const mapStateToProps = (reducers) => ({
  initialCube: reducers.cube.initialCube,
  moves: reducers.cube.moves,
});

Cube.propTypes = {
  initialCube: PropTypes.instanceOf(Array).isRequired,
  moves: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(Cube);
