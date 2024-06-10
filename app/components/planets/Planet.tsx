import React, { ReactNode } from 'react';
import styles from './Planet.module.css';

type Props = {
	name: string;
	color: string;
	column: string;
	row: string;
};

export default function Planet({ name, color, column, row }: Props) {
	const planetName = name.toUpperCase();

	const planetBody = (
		<div style={{ backgroundColor: color }}>
			<div>{planetName}</div>
		</div>
	);

	return (
		<div className={styles.Planet} style={{ gridColumn: column, gridRow: row }}>
			{planetBody}
		</div>
	);
}
