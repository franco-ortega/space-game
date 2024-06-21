// import Planet from '../planets/Planet';
import PlanetContainer from '../planets/PlanetContainer';
import SpaceDock from '../spaceDock/SpaceDock';
import Zone1 from '../zones/Zone1';
import ZoneTemplate from '../zones/ZoneTemplate';
import Zone2 from '../zones/Zone2';
import styles from './GameBoard.module.css';
import Zone3 from '../zones/Zone3';
import Zone4 from '../zones/Zone4';
import Planet1_Joa from '../planets/Planet1_Joa';
import Zone from '../zones/Zone';

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
				Planet={EmptyZone}
			/>
			<Zone
				zoneData={{
					column: '2 / 15',
					row: '23 / 29',
				}}
				Planet={EmptyZone}
			/>
			<Zone
				zoneData={{
					column: '16 / 30',
					row: '23 / 29',
				}}
				Planet={EmptyZone}
			/>

			{/* <PlanetContainer
				planetData={{
					name: 'JOA',
					color: 'blue',
					coordinates: {
						column: '3 / 15',
						row: '3 / 8',
					},
					rings: 1,
				}}
			/> */}
			{/* <PlanetContainer
				planetData={{
					name: 'IOA',
					color: 'darkred',
					coordinates: {
						column: '17 / 27',
						row: '6 / 12',
					},
					rings: 0,
				}}
			/> */}
			{/* <PlanetContainer
				planetData={{
					name: 'KOA',
					color: 'lightblue',
					coordinates: {
						column: '3 / 16',
						row: '13 / 19',
					},
					rings: 2,
				}}
			/> */}

			{/* <PlanetContainer
				planetData={{
					name: 'DOA',
					color: 'pink',
					coordinates: {
						column: '5 / 15',
						row: '25 / 30',
					},
					rings: 0,
				}}
			/> */}
		</main>
	);
}

{
	/* <Planet
				name={'JOA'}
				color={'blue'}
				gridLocation={{
					column: '2 / 8',
					row: '2 / 8',
				}}
				rings={2}
			/>
			<Planet
				name={'KOA'}
				color={'lightblue'}
				gridLocation={{
					column: '12 / 20',
					row: '10 / 18',
				}}
				rings={4}
			/>
			<Planet
				name={'IOA'}
				color={'darkred'}
				gridLocation={{
					column: '16 / 23',
					row: '3 / 9',
				}}
				rings={0}
			/> */
}

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

function EmptyZone() {
	return <></>;
}
