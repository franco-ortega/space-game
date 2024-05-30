import React, { ReactNode } from 'react';
import styles from './Space.module.css';
import randomNumber from '@/app/utils/randomNumber';

type Props = { children: ReactNode };

const radGradList = [];

do {
	radGradList.push(createStar());
} while (radGradList.length < 100);

const radGradItems = radGradList.reduce((a, c) => a + ', ' + c);

function createStar() {
	/* generates a random positive integer between 1 and max */
	function randomNumberGenerator(max: number) {
		return Math.floor(Math.random() * max) + 1;
	}

	let size = randomNumber(1, 2);
	let xPosition = randomNumber(5, 95);
	let yPosition = randomNumber(5, 95);

	const star = `radial-gradient(${size}px ${size}px at ${xPosition}% ${yPosition}%, var(--white-one), var(--white-transparent))`;

	return star;
}

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
