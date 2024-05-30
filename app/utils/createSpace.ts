import createStar from "./createStar";

export default function createSpace(stars: number = 100) {
  const starList = [];

do {
	starList.push(createStar());
} while (starList.length < stars);

console.log(starList.length)

const space = starList.reduce((a, c) => a + ', ' + c);

return space;
};
