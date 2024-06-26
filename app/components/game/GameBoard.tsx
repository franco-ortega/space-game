import planets from '../../data/planets.json';
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
					zoneCoordinates: {
						column: '2 / 15',
						row: '5 / 11',
					},
				}}
				Planet={PlanetJoa}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: {
						column: '16 / 30',
						row: '5 / 11',
					},
				}}
				Planet={PlanetIoa}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: {
						column: '2 / 15',
						row: '11 / 17',
					},
				}}
				Planet={PlanetKoa}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: {
						column: '16 / 30',
						row: '11 / 17',
					},
				}}
				Planet={EmptyZone}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: {
						column: '2 / 15',
						row: '17 / 23',
					},
				}}
				Planet={EmptyZone}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: {
						column: '16 / 30',
						row: '17 / 23',
					},
				}}
				Planet={PlanetZoa}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: {
						column: '2 / 15',
						row: '23 / 29',
					},
				}}
				Planet={PlanetDoa}
			/>
			<Zone
				zoneData={{
					zoneCoordinates: {
						column: '16 / 30',
						row: '23 / 29',
					},
				}}
				Planet={EmptyZone}
				// Planet={PlanetTest}
			/>
		</main>
	);
}

/* PLANETS */
/* a PLANET is comprised of:
- ORBIT  parent component
- optional number of RING child components 
- PLANET child or grandchild component */

const { doa, ioa, joa, koa, zoa } = planets;

function PlanetJoa() {
	return (
		<Orbit planetPosition={joa.orbit}>
			<Ring ringColor='hsl(200 50% 70%)' ringPadding='5px' ringWidth='2px'>
				<Planet planetData={joa} />
			</Ring>
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
			<Ring
				ringColor='hsl(40, 100%, 50%, 0.75)'
				ringPadding='4px'
				ringWidth='2px'
			>
				<Ring
					ringColor='hsl(0, 100%, 40%, 0.85)'
					ringPadding='5px'
					ringWidth='4px'
				>
					<Planet planetData={koa} />
				</Ring>
			</Ring>
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
