const rubik = require('../utils/rubik');

// Initial State
const initialState = {
  firstScramble: rubik.randomCube(),
};

// Actions
const SCRAMBLE = 'SCRAMBLE';

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SCRAMBLE:
    default:
      return state;
  }
}

// Action Creators
