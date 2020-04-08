import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetState } from '../../redux/cubeDuck';
import './Welcome.scss';
import { ReactComponent as RubikSVG } from '../../assets/static/svg/rubik.svg';

const Welcome = ({ moves, resetStateAction }) => {
  const [redirect, setRedirect] = useState(false);

  const newGame = () => {
    resetStateAction();
    setRedirect(true);
  };

  const continueGame = () => {
    setRedirect(true);
  };

  return (
    <>
      {
        redirect
          ? <Redirect to="/game" />
          : (
            <section className="Welcome">
              <h1 className="Welcome__title">
                <span className="color--green">W</span>
                <span className="color--white">e</span>
                <span className="color--blue">l</span>
                <span className="color--orange">c</span>
                <span className="color--yellow">o</span>
                <span className="color--red">m</span>
                <span className="color--white">e</span>
              </h1>
              <button
                onClick={newGame}
                className="Welcome__new"
                type="button"
              >
                New game
              </button>
              {moves.length ? (
                <button
                  onClick={continueGame}
                  className="Welcome__continue"
                  type="button"
                >
                  Continue last game
                </button>
              ) : '' }
              <RubikSVG className="Welcome__img" />
            </section>
          )
      }
    </>
  );
};

const mapStateToProps = (reducers) => ({
  moves: reducers.cube.moves,
});

Welcome.propTypes = {
  moves: PropTypes.instanceOf(Array).isRequired,
  resetStateAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { resetStateAction: resetState })(Welcome);
