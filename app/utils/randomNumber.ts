export function randomNumber(min: number = 1, max: number = 100) {
  return (Math.random() * max) + min;
};

export function randomInteger(min: number = 1, max: number = 100) {
  return Math.floor(randomNumber(min, max));
};
