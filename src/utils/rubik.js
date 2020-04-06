const random = require('./random');

const moves = [
  'R',
  "R'",
  'L',
  "L'",
  'U',
  "U'",
  'D',
  "D'",
  'F',
  "F'",
  'B',
  "B'",
  'M',
  "M'",
  'E',
  "E'",
  'S',
  "S'",
];

const randomCube = () => {
  const cont = random(5, 25);
  const cubeMoves = [];

  for (let i = 0; i < cont; i += 1) {
    cubeMoves.push(moves[random(0, moves.length - 1)]);
  }

  return cubeMoves;
};

module.exports = {
  moves,
  randomCube,
};
