const rubik = require('../utils/rubik');

// Initial State
const initialState = {
  initialCube: rubik.randomCube(),
  moves: [],
  isSolved: true,
};

// Actions
const ADD_MOVE = 'ADD_MOVE';
const IS_SOLVED = 'CHANGE_IS_SOLVED';

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
