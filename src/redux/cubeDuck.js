const rubik = require('../utils/rubik');

// Initial State
const initialState = {
  initialCube: rubik.randomCube(),
  moves: [],
  isSolved: false,
};

// Actions
const ADD_MOVE = 'ADD_MOVE';
const IS_SOLVED = 'CHANGE_IS_SOLVED';
const RESET_STATE = 'RESET_STATE';
const SOLVED_CUBE = 'SOLVED_CUBE';

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVE:
      return {
        ...state,
        moves: action.payload,
      };
    case IS_SOLVED:
      return {
        ...state,
        isSolved: action.payload,
      };
    case RESET_STATE:
      return {
        initialCube: rubik.randomCube(),
        moves: [],
        isSolved: false,
      };
    case SOLVED_CUBE:
      return {
        initialCube: ['R', "R'"],
        moves: [],
        isSolved: false,
      };
    default:
      return state;
  }
}

// Action Creators
export const addMove = (moves) => (dispatch) => {
  dispatch({
    type: ADD_MOVE,
    payload: [...moves],
  });
};
export const isSolved = (solved) => (dispatch) => {
  dispatch({
    type: IS_SOLVED,
    payload: solved,
  });
};
export const resetState = (state) => (dispatch) => {
  dispatch({
    type: RESET_STATE,
    payload: state,
  });
};
export const solvedCube = (state) => (dispatch) => {
  dispatch({
    type: SOLVED_CUBE,
    payload: state,
  });
};
