import Orbit from '../orbit/Orbit';
import Planet from '../planets/Planet';
import PlanetContainer from '../planets/PlanetContainer';
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
				Planet={PlanetTest}
			/>
		</main>
	);
}

/* PLANETS */
function PlanetJoa() {
	return (
		<PlanetContainer
			planetData={{
				width: '10rem',
				name: 'JOA',
				color: 'blue',
				rings: 1,
			}}
		/>
	);
}

function PlanetIoa() {
	return (
		<PlanetContainer
			planetData={{
				width: '10rem',
				name: 'IOA',
				color: 'darkred',
				rings: 0,
			}}
		/>
	);
}

function PlanetKoa() {
	return (
		<PlanetContainer
			planetData={{
				width: '10rem',
				name: 'KOA',
				color: 'lightblue',
				rings: 2,
			}}
		/>
	);
}

function PlanetZoa() {
	return (
		<PlanetContainer
			planetData={{
				width: '10rem',
				name: 'ZOA',
				color: 'orange',
				rings: 0,
			}}
		/>
	);
}

function PlanetDoa() {
	return (
		<PlanetContainer
			planetData={{
				width: '10rem',
				name: 'DOA',
				color: 'pink',
				rings: 0,
			}}
		/>
	);
}

/* a PLANET is comprised of:
- ORBIT  parent component
- optional number of RING child components 
- PLANET child or grandchild component */

function PlanetTest() {
	return (
		<Orbit>
			<Ring>
				<Ring>
					<Planet
						planetDetails={{
							name: 'TEST',
							color: 'green',
							rings: 0,
							width: '5rem',
						}}
					/>
				</Ring>
			</Ring>
		</Orbit>
	);
}

function EmptyZone() {
	return <></>;
}
