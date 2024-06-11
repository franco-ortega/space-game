import React, { ReactNode } from 'react';
import { GridLocation } from '@/app/types/types';
import Ring from '../rings/Ring';
import styles from './Planet.module.css';

type Props = {
	name: string;
	color: string;
	// column: string;
	// row: string;
	gridLocation: GridLocation;
	ring: boolean;
};

export default function Planet({ name, color, gridLocation, ring }: Props) {
	const planetName = name.toUpperCase();

	const planetBody = (
		<div className={styles.PlanetBody} style={{ backgroundColor: color }}>
			<div className={styles.PlanetName}>{planetName}</div>
		</div>
	);

	return (
		<div
			className={styles.Planet}
			style={{ gridColumn: gridLocation.column, gridRow: gridLocation.row }}
		>
			{ring ? (
				<Ring>
					<Ring>{planetBody}</Ring>
				</Ring>
			) : (
				planetBody
			)}
		</div>
	);
}
