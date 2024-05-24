import React, { ReactNode } from 'react';
import styles from './Space.module.css';

type Props = { children: ReactNode };

// background-image: radial-gradient(
//   1px 1px at 25px 5px,
//   var(--white-one),
//   var(--white-transparent)
// ),

const radGrad1 =
  'radial-gradient(1px 1px at 25px 5px, var(--white-one), var(--white-transparent))';
const radGrad2 =
  'radial-gradient(1px 1px at 50px 25px, var(--white-one), var(--white-transparent))';

const radGradList = [radGrad1, radGrad2, createStar()];

const radGradItems = radGradList.reduce((a, c) => a + ', ' + c);
// console.log(radGradItems);

function createStar() {
  function randomNumberGenerator(max: number) {
    /* generates a random positive integer between 1 and max */
    return Math.floor(Math.random() * max) + 1;
  }

  let size = randomNumberGenerator(5);
  let xPosition = randomNumberGenerator(99);
  let yPosition = randomNumberGenerator(99);

  const star = `radial-gradient(${size}px ${size}px at ${xPosition}% ${yPosition}%, var(--white-one), var(--white-transparent))`;

  return star;
}

// const radialGradient = `radial-gradient(1px 1px at 25px 5px, var(--white-one), var(--white-transparent)), radial-gradient(1px 1px at 50px 25px, var(--white-one), var(--white-transparent))`;

export default function Space({ children }: Props) {
  return (
    <div className={styles.Space}>
      <div
        style={{
          color: 'red',
          backgroundImage: radGradItems,
        }}
      >
        {children}
      </div>
    </div>
  );
}
