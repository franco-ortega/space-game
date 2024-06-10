import React, { ReactNode } from 'react';
import styles from './Planet.module.css';
import Ring from '../rings/Ring';

type Props = {
	name: string;
	color: string;
	column: string;
	row: string;
};

export default function Planet({ name, color, column, row }: Props) {
	const planetName = name.toUpperCase();

	const planetBody = (
		<div className={styles.PlanetBody} style={{ backgroundColor: color }}>
			<div className={styles.PlanetName}>{planetName}</div>
		</div>
	);

	return (
		<div className={styles.Planet} style={{ gridColumn: column, gridRow: row }}>
			<Ring>{planetBody}</Ring>
		</div>
	);
}
