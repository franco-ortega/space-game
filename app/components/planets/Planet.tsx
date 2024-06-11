// import React, { ReactNode } from 'react';
// import Ring from '../rings/Ring';
import styles from './Planet.module.css';

type Props = {
	name: string;
	color: string;
	rings: number;
};

export default function Planet({ name, color, rings }: Props) {
	const planetName = name.toUpperCase();

	// const planetBody = (
	// 	<div className={styles.PlanetBody} style={{ backgroundColor: color }}>
	// 		<div className={styles.PlanetName}>{planetName}</div>
	// 	</div>
	// );

	// const planet = rings ? addRingsToPlanet(planetBody, rings) : planetBody;

	return (
		// <div className={styles.Planet} style={{ gridColumn: column, gridRow: row }}>
		// 	{planet}
		// </div>
		<div className={styles.Planet} style={{ backgroundColor: color }}>
			<div>{planetName}</div>
		</div>
	);
}

// function addRingsToPlanet(planet: React.JSX.Element, amount: number) {
// 	let count = 0;
// 	let ringedPlanet = planet;

// 	while (count < amount) {
// 		ringedPlanet = <Ring>{ringedPlanet}</Ring>;
// 		count++;
// 	}

// 	return ringedPlanet;
// }

// import React, { ReactNode, useState } from 'react';
// import { GridLocation } from '@/app/types/types';
// import Ring from '../rings/Ring';
// import styles from './Planet.module.css';

// type Props = {
// 	name: string;
// 	color: string;
// 	gridLocation: GridLocation;
// 	rings: number;
// };

// function addRingsToPlanet(planet: React.JSX.Element, amount: number) {
// 	let count = 0;
// 	let ringedPlanet = planet;

// 	while (count < amount) {
// 		ringedPlanet = <Ring>{ringedPlanet}</Ring>;
// 		count++;
// 	}

// 	return ringedPlanet;
// }

// export default function Planet({ name, color, gridLocation, rings }: Props) {
// 	const planetName = name.toUpperCase();
// 	const { column, row } = gridLocation;

// 	const planetBody = (
// 		<div className={styles.PlanetBody} style={{ backgroundColor: color }}>
// 			<div className={styles.PlanetName}>{planetName}</div>
// 		</div>
// 	);

// 	const planet = rings ? addRingsToPlanet(planetBody, rings) : planetBody;

// 	return (
// 		<div className={styles.Planet} style={{ gridColumn: column, gridRow: row }}>
// 			{planet}
// 		</div>
// 	);
// }
