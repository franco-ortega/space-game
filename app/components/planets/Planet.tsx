'use client';

import React, { ReactNode, useState } from 'react';
import { GridLocation } from '@/app/types/types';
import Ring from '../rings/Ring';
import styles from './Planet.module.css';

type Props = {
	name: string;
	color: string;
	gridLocation: GridLocation;
	rings: number;
};

function addRingsToPlanet(ring: React.JSX.Element, amount: number) {
	let count = 0;
	let ringedPlanet = ring;

	while (count < amount) {
		ringedPlanet = <Ring>{ringedPlanet}</Ring>;
		console.log(count);
		count++;
	}

	return ringedPlanet;
}

export default function Planet({ name, color, gridLocation, rings }: Props) {
	const planetName = name.toUpperCase();
	const { column, row } = gridLocation;

	const planetBody = (
		<div className={styles.PlanetBody} style={{ backgroundColor: color }}>
			<div className={styles.PlanetName}>{planetName}</div>
		</div>
	);

	const planet = rings ? addRingsToPlanet(planetBody, rings) : planetBody;

	return (
		<div className={styles.Planet} style={{ gridColumn: column, gridRow: row }}>
			{planet}
		</div>
	);
}
