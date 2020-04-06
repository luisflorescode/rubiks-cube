const random = require('./random');

const movements = [
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
  const cont = random(3, 6);
  const cubeMovements = [];

  for (let i = 0; i < cont; i += 1) {
    cubeMovements.push(movements[random(0, movements.length - 1)]);
  }

  return cubeMovements;
};

module.exports = {
  movements,
  randomCube,
};
