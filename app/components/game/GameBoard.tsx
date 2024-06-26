import planets from '../../data/planets.json';
import zones from '../../data/zones.json';
import Zone from '../zones/Zone';
import SpaceDock from '../spaceDock/SpaceDock';
import Orbit from '../orbit/Orbit';
import Ring from '../rings/Ring';
import Planet from '../planets/Planet';
import styles from './GameBoard.module.css';

export default function GameBoard() {
	return (
		<main className={styles.GameBoard}>
			<SpaceDock />
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

/*
PLANETS

a PLANET is comprised of:
- ORBIT parent component
- PLANET child component 
*/

const { doa, ioa, joa, koa, zoa } = planets;

function PlanetJoa() {
	return (
		<Orbit planetPosition={joa.orbit}>
			<Planet planetData={joa} />
		</Orbit>
	);
}

function PlanetIoa() {
	return (
		<Orbit planetPosition={ioa.orbit}>
			<Planet planetData={ioa} />
		</Orbit>
	);
}

function PlanetKoa() {
	return (
		<Orbit planetPosition={koa.orbit}>
			<Planet planetData={koa} />
		</Orbit>
	);
}

function PlanetZoa() {
	return (
		<Orbit planetPosition={zoa.orbit}>
			<Planet planetData={zoa} />
		</Orbit>
	);
}

function PlanetDoa() {
	return (
		<Orbit planetPosition={doa.orbit}>
			<Planet planetData={doa} />
		</Orbit>
	);
}

function EmptyZone() {
	return <></>;
}

/* Test planet and previous architecture of existing planets */

// function PlanetTest() {
// 	return (
// 		<Orbit
// 			planetPosition={{
// 				alignItems: 'flex-start',
// 				justifyContent: 'flex-start',
// 			}}
// 		>
// 			<Ring>
// 				<Ring>
// 					<Planet
// 						planetData={{
// 							name: 'TEST',
// 							color: 'green'
// 							width: '5rem',
// 						}}
// 					/>
// 				</Ring>
// 			</Ring>
// 		</Orbit>
// 	);
// }
