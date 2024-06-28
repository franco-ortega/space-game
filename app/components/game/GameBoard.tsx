'use client';

import testShip from '/public/spaceships/rocket_2.png';
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

	const { doa, ioa, joa, koa, zoa, koa2, koa3, koa4 } = planets;

	const PlanetJoa = createPlanet(joa, setShipLocation, zones.zone1);
	const PlanetIoa = createPlanet(ioa, setShipLocation, zones.zone2);
	const PlanetDoa = createPlanet(doa, setShipLocation, zones.zone7);
	const PlanetKoa = createPlanet(koa, setShipLocation, zones.zone3);
	const PlanetZoa = createPlanet(zoa, setShipLocation, zones.zone6);

	const PlanetKoa2 = createPlanet(koa2, setShipLocation, zones.zone3);
	const PlanetKoa3 = createPlanet(koa3, setShipLocation, zones.zone3);
	const PlanetKoa4 = createPlanet(koa4, setShipLocation, zones.zone3);

	const SpaceDockReady = function SpaceDockCreator() {
		return (
			<SpaceDock setShipLocation={setShipLocation} zoneData={zones.zone0} />
		);
	};

	function EmptyZone() {
		return <></>;
	}

	return (
		<main className={styles.GameBoard}>
			{/* <Spaceship
				ship={testShip}
				shipData={{
					shipCoordinates: shipLocation,
				}}
			/> */}
			<Zone
				zoneData={{
					zoneCoordinates: zones.zone0,
				}}
				Planet={SpaceDockReady}
				setShipLocation={setShipLocation}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: zones.zone1,
				}}
				Planet={PlanetJoa}
				setShipLocation={setShipLocation}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: zones.zone2,
				}}
				Planet={PlanetIoa}
				setShipLocation={setShipLocation}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: zones.zone3,
				}}
				Planet={PlanetKoa}
				setShipLocation={setShipLocation}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: zones.zone4,
				}}
				Planet={PlanetKoa2}
				setShipLocation={setShipLocation}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: zones.zone5,
				}}
				Planet={PlanetKoa3}
				setShipLocation={setShipLocation}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: zones.zone6,
				}}
				Planet={PlanetZoa}
				setShipLocation={setShipLocation}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: zones.zone7,
				}}
				Planet={PlanetDoa}
				setShipLocation={setShipLocation}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: zones.zone8,
				}}
				Planet={PlanetKoa4}
				setShipLocation={setShipLocation}
			/>
		</main>
	);
}
