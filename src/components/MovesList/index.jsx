import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Move from '../Move';
import './MovesList.scss';
import R from '../../assets/static/images/R-min.png';
import Rr from '../../assets/static/images/Rr-min.png';
import L from '../../assets/static/images/L-min.png';
import Lr from '../../assets/static/images/Lr-min.png';
import U from '../../assets/static/images/U-min.png';
import Ur from '../../assets/static/images/Ur-min.png';
import D from '../../assets/static/images/D-min.png';
import Dr from '../../assets/static/images/Dr-min.png';
import F from '../../assets/static/images/F-min.png';
import Fr from '../../assets/static/images/Fr-min.png';
import B from '../../assets/static/images/B-min.png';
import Br from '../../assets/static/images/Br-min.png';
import M from '../../assets/static/images/M-min.png';
import Mr from '../../assets/static/images/Mr-min.png';
import E from '../../assets/static/images/E-min.png';
import Er from '../../assets/static/images/Er-min.png';
import S from '../../assets/static/images/S-min.png';
import Sr from '../../assets/static/images/Sr-min.png';

const MovesList = ({ isSolved }) => {
  const moves = [
    {
      move: 'R',
      image: R,
    },
    {
      move: "R'",
      image: Rr,
    },
    {
      move: 'L',
      image: L,
    },
    {
      move: "L'",
      image: Lr,
    },
    {
      move: 'U',
      image: U,
    },
    {
      move: "U'",
      image: Ur,
    },
    {
      move: 'D',
      image: D,
    },
    {
      move: "D'",
      image: Dr,
    },
    {
      move: 'F',
      image: F,
    },
    {
      move: "F'",
      image: Fr,
    },
    {
      move: 'B',
      image: B,
    },
    {
      move: "B'",
      image: Br,
    },
    {
      move: 'M',
      image: M,
    },
    {
      move: "M'",
      image: Mr,
    },
    {
      move: 'E',
      image: E,
    },
    {
      move: "E'",
      image: Er,
    },
    {
      move: 'S',
      image: S,
    },
    {
      move: "S'",
      image: Sr,
    },
  ];

  return (
    <>
      {isSolved ? (
        ''
      ) : (
        <section className="MovesList">
          <h2 className="color--red">Apply Move</h2>
          <div className="MovesList__content">
            {moves.map((item) => (
              <Move key={item.move} move={item.move} image={item.image} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

const mapStateToProps = (reducers) => ({
  isSolved: reducers.cube.isSolved,
});

MovesList.propTypes = {
  isSolved: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(MovesList);
