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
					column: '2 / 15',
					row: '5 / 11',
				}}
				Planet={PlanetJoa}
			/>
			<Zone
				zoneData={{
					column: '16 / 30',
					row: '5 / 11',
				}}
				Planet={PlanetIoa}
			/>
			<Zone
				zoneData={{
					column: '2 / 15',
					row: '11 / 17',
				}}
				Planet={PlanetKoa}
			/>
			<Zone
				zoneData={{
					column: '16 / 30',
					row: '11 / 17',
				}}
				Planet={EmptyZone}
			/>
			<Zone
				zoneData={{
					column: '2 / 15',
					row: '17 / 23',
				}}
				Planet={EmptyZone}
			/>
			<Zone
				zoneData={{
					column: '16 / 30',
					row: '17 / 23',
				}}
				Planet={PlanetZoa}
			/>
			<Zone
				zoneData={{
					column: '2 / 15',
					row: '23 / 29',
				}}
				Planet={PlanetDoa}
			/>
			<Zone
				zoneData={{
					column: '16 / 30',
					row: '23 / 29',
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

function PlanetJoa() {
	return (
		<Orbit
			planetPosition={{
				alignItems: 'center',
				justifyContent: 'flex-start',
			}}
		>
			<Ring>
				<Planet
					planetData={{
						name: 'JOA',
						color: 'blue',
						width: '4rem',
					}}
				/>
			</Ring>
		</Orbit>
	);
}

function PlanetIoa() {
	return (
		<Orbit
			planetPosition={{
				alignItems: 'flex-start',
				justifyContent: 'flex-start',
			}}
		>
			<Planet
				planetData={{
					name: 'IOA',
					color: 'darkred',
					width: '5rem',
				}}
			/>
		</Orbit>
	);
}

function PlanetKoa() {
	return (
		<Orbit
			planetPosition={{
				alignItems: 'flex-end',
				justifyContent: 'flex-end',
			}}
		>
			<Ring>
				<Ring>
					<Planet
						planetData={{
							name: 'KOA',
							color: 'lightblue',
							width: '5rem',
						}}
					/>
				</Ring>
			</Ring>
		</Orbit>
	);
}

function PlanetZoa() {
	return (
		<Orbit
			planetPosition={{
				alignItems: 'flex-end',
				justifyContent: 'flex-start',
			}}
		>
			<Planet
				planetData={{
					name: 'ZOA',
					color: 'orange',
					width: '7rem',
				}}
			/>
		</Orbit>
	);
}

function PlanetDoa() {
	return (
		<Orbit
			planetPosition={{
				alignItems: 'flex-start',
				justifyContent: 'flex-end',
			}}
		>
			<Planet
				planetData={{
					name: 'DOA',
					color: 'pink',
					width: '5rem',
				}}
			/>
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

// function PlanetJoa() {
// 	return (
// 		<PlanetContainer
// 			planetData={{
// 				name: 'JOA',
// 				color: 'blue'
// 			}}
// 		/>
// 	);
// }

// function PlanetIoa() {
// 	return (
// 		<PlanetContainer
// 			planetData={{
// 				name: 'IOA',
// 				color: 'darkred'
// 			}}
// 		/>
// 	);
// }

// function PlanetKoa() {
// 	return (
// 		<PlanetContainer
// 			planetData={{
// 				name: 'KOA',
// 				color: 'lightblue'
// 			}}
// 		/>
// 	);
// }

// function PlanetZoa() {
// 	return (
// 		<PlanetContainer
// 			planetData={{
// 				name: 'ZOA',
// 				color: 'orange'
// 			}}
// 		/>
// 	);
// }

// function PlanetDoa() {
// 	return (
// 		<PlanetContainer
// 			planetData={{
// 				name: 'DOA',
// 				color: 'pink'
// 			}}
// 		/>
// 	);
// }
