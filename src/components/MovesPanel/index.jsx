import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resetState } from '../../redux/cubeDuck';
import './MovesPanel.scss';

const MovesPanel = ({ moves, isSolved, resetStateAction }) => {
  const playAgain = () => {
    resetStateAction();
  };

  return (
    <section className="MovesPanel">
      {isSolved ? (
        <div className="MovesPanel__congrats">
          <h3 className="MovesPanel__congrats__text">
            Congratulations, the cube is solved!
            <span role="img" aria-label="confeti">
              🎊
            </span>
          </h3>
          <button onClick={playAgain} className="MovesPanel__congrats__btn" type="button">
            Play again
          </button>
        </div>
      ) : (
        <>
          <h3 className="MovesPanel__movesNumber">
            Number of moves:
            {' '}
            <span className="color--orange">{moves.length}</span>
          </h3>
          <h3 className="MovesPanel__movesHistory">
            Moves history
            <br />
            <span className="color--green">
              {!moves.length ? 'No moves.' : moves.join(' ')}
            </span>
          </h3>
        </>
      )}
    </section>
  );
};

const mapStateToProps = (reducers) => ({
  moves: reducers.cube.moves,
  isSolved: reducers.cube.isSolved,
});

MovesPanel.propTypes = {
  moves: PropTypes.instanceOf(Array).isRequired,
  isSolved: PropTypes.bool.isRequired,
  resetStateAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  resetStateAction: resetState,
})(MovesPanel);
