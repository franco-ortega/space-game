'use client';

import React, { ReactNode, useState } from 'react';
import { GridLocation } from '@/app/types/types';
import Ring from '../rings/Ring';
import styles from './Planet.module.css';

type Props = {
	name: string;
	color: string;
	gridLocation: GridLocation;
	ring: boolean;
};

export default function Planet({ name, color, gridLocation, ring }: Props) {
	const planetName = name.toUpperCase();
	const { column, row } = gridLocation;

	const planetBody = (
		<div className={styles.PlanetBody} style={{ backgroundColor: color }}>
			<div className={styles.PlanetName}>{planetName}</div>
		</div>
	);

	const ringNumber = 2;
	let count = 0;
	let ringedPlanet: React.JSX.Element = planetBody;

	while (count < ringNumber) {
		ringedPlanet = <Ring>{ringedPlanet}</Ring>;
		count++;
	}

	console.log(count);

	return (
		<div className={styles.Planet} style={{ gridColumn: column, gridRow: row }}>
			{ring
				? // <Ring>
				  // 	<Ring>{planetBody}</Ring>
				  // </Ring>
				  ringedPlanet
				: planetBody}
		</div>
	);
}
