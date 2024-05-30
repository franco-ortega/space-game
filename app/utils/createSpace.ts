import createStar from "./createStar";

export default function createSpace() {
  const starList = [];

do {
	starList.push(createStar());
} while (starList.length < 100);

const space = starList.reduce((a, c) => a + ', ' + c);

return space;
};
