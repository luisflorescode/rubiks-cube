const rubik = require('../utils/rubik');

// Initial State
const initialState = {
  initialCube: rubik.randomCube(),
  moves: [],
};

// Actions
const ADD_MOVE = 'ADD_MOVE';

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVE:
      return {
        ...state,
        moves: action.payload,
      };
    default:
      return state;
  }
}

// Action Creators
export const addMove = (move) => (dispatch) => {
  dispatch({
    type: ADD_MOVE,
    payload: [...move],
  });
};
