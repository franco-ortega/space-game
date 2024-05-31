import createStar from "./createStar";

export default function createSpace(stars: number = 100) {
  const starList = [];

  while (starList.length < stars) {
	starList.push(createStar());
};

return starList.reduce((a, c) => a + ', ' + c);
};
