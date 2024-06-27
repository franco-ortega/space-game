'use client';

import testShip from '/public/spaceships/rocket_1.png';
import planets from '../../data/planets.json';
import zones from '../../data/zones.json';
import createPlanet from '@/app/utils/createPlanet';
import Zone from '../zones/Zone';
import SpaceDock from '../spaceDock/SpaceDock';
import styles from './GameBoard.module.css';
import Spaceship from '../spaceship/Spaceship';
import { useState } from 'react';

export default function GameBoard() {
	const [shipLocation, setShipLocation] = useState(zones.zone0);

	const { doa, ioa, joa, koa, zoa } = planets;

	const PlanetJoa = createPlanet(joa);
	const PlanetIoa = createPlanet(ioa);
	const PlanetDoa = createPlanet(doa);
	const PlanetKoa = createPlanet(koa);
	const PlanetZoa = createPlanet(zoa);

	function EmptyZone() {
		return <></>;
	}

	return (
		<main className={styles.GameBoard}>
			<Spaceship
				ship={testShip}
				shipData={{
					shipCoordinates: shipLocation,
				}}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: zones.zone0,
				}}
				Planet={SpaceDock}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: zones.zone1,
				}}
				Planet={PlanetJoa}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: zones.zone2,
				}}
				Planet={PlanetIoa}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: zones.zone3,
				}}
				Planet={PlanetKoa}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: zones.zone4,
				}}
				Planet={EmptyZone}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: zones.zone5,
				}}
				Planet={EmptyZone}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: zones.zone6,
				}}
				Planet={PlanetZoa}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: zones.zone7,
				}}
				Planet={PlanetDoa}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: zones.zone8,
				}}
				Planet={EmptyZone}
			/>
		</main>
	);
}
