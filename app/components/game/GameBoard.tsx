import PlanetContainer from '../planets/PlanetContainer';
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
			/>
		</main>
	);
}

/* PLANETS */
function PlanetJoa() {
	return (
		<PlanetContainer
			planetData={{
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
				name: 'DOA',
				color: 'pink',
				rings: 0,
			}}
		/>
	);
}

function EmptyZone() {
	return <></>;
}
