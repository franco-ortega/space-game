export default function randomNumber(min: number = 1, max: number = 99) {
  return Math.floor(Math.random() * max) + min;
};