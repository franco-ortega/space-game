import Orbit from '../orbit/Orbit';
import Planet from '../planets/Planet';
// import PlanetContainer from '../planets/PlanetContainer';
import Ring from '../rings/Ring';
import SpaceDock from '../spaceDock/SpaceDock';
import Zone from '../zones/Zone';
import styles from './GameBoard.module.css';

type Props = {};

export default function GameBoard({}: Props) {
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
					planetDetails={{
						name: 'JOA',
						color: 'blue',
						// rings: 1,
						rings: 0,
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
				planetDetails={{
					name: 'IOA',
					color: 'darkred',
					rings: 0,
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
						planetDetails={{
							name: 'KOA',
							color: 'lightblue',
							// rings: 2,
							rings: 0,
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
				planetDetails={{
					name: 'ZOA',
					color: 'orange',
					rings: 0,
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
				planetDetails={{
					name: 'DOA',
					color: 'pink',
					rings: 0,
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
// 						planetDetails={{
// 							name: 'TEST',
// 							color: 'green',
// 							rings: 0,
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
// 				color: 'blue',
// 				rings: 1,
// 			}}
// 		/>
// 	);
// }

// function PlanetIoa() {
// 	return (
// 		<PlanetContainer
// 			planetData={{
// 				name: 'IOA',
// 				color: 'darkred',
// 				rings: 0,
// 			}}
// 		/>
// 	);
// }

// function PlanetKoa() {
// 	return (
// 		<PlanetContainer
// 			planetData={{
// 				name: 'KOA',
// 				color: 'lightblue',
// 				rings: 2,
// 			}}
// 		/>
// 	);
// }

// function PlanetZoa() {
// 	return (
// 		<PlanetContainer
// 			planetData={{
// 				name: 'ZOA',
// 				color: 'orange',
// 				rings: 0,
// 			}}
// 		/>
// 	);
// }

// function PlanetDoa() {
// 	return (
// 		<PlanetContainer
// 			planetData={{
// 				name: 'DOA',
// 				color: 'pink',
// 				rings: 0,
// 			}}
// 		/>
// 	);
// }
