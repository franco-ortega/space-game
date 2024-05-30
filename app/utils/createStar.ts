import { randomInteger } from "./randomNumber";

export function starPosition() {
  return randomInteger(1, 99);
};

export function starSize() {
  return randomInteger(1, 2);
};

export default function createStar() {
  let size = starSize();
	let xPosition = starPosition();
	let yPosition = starPosition();

	const star = `radial-gradient(${size}px ${size}px at ${xPosition}% ${yPosition}%, var(--white-one), var(--white-transparent))`;

	return star;
};
