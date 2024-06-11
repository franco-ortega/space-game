// import React, { ReactNode } from 'react';
import { PlanetData } from '@/app/types/types';
import Planet from './Planet';
import Ring from '../rings/Ring';

type Props = {
	planetData: PlanetData;
};

function addRingsToPlanet(planet: React.JSX.Element, amount: number) {
	let count = 0;
	let ringedPlanet = planet;

	while (count < amount) {
		ringedPlanet = <Ring>{ringedPlanet}</Ring>;
		count++;
	}

	return ringedPlanet;
}

export default function PlanetContainer({ planetData }: Props) {
	const { name, color, rings, coordinates } = planetData;

	const planetName = name.toUpperCase();
	const { column, row } = coordinates;

	// const planetBody = (
	// 	<div className={styles.PlanetBody} style={{ backgroundColor: color }}>
	// 		<div className={styles.PlanetName}>{planetName}</div>
	// 	</div>
	// );

	const planetBody = <Planet name={planetName} color={color} rings={rings} />;

	const planet = rings ? addRingsToPlanet(planetBody, rings) : planetBody;

	return <div style={{ gridColumn: column, gridRow: row }}>{planet}</div>;
}
