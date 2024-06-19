// import Planet from '../planets/Planet';
import PlanetContainer from '../planets/PlanetContainer';
import SpaceDock from '../spaceDock/SpaceDock';
import Zone1 from '../zones/Zone1';
import ZoneTemplate from '../zones/ZoneTemplate';
import Zone2 from '../zones/Zone2';
import styles from './GameBoard.module.css';
import Zone3 from '../zones/Zone3';

type Props = {};

export default function GameBoard({}: Props) {
	return (
		<main className={styles.GameBoard}>
			<SpaceDock />
			<Zone1 />
			<Zone2 />
			<Zone3 />
			{/* <ZoneTemplate
				zoneData={{
					zoneCoordinates: {
						column: '2 / 15',
						row: '11 / 17',
					},
				}}
			>
				Zone 3
			</ZoneTemplate> */}
			<ZoneTemplate
				zoneData={{
					zoneCoordinates: {
						column: '16 / 30',
						row: '11 / 17',
					},
				}}
			>
				Zone 4
			</ZoneTemplate>
			<ZoneTemplate
				zoneData={{
					zoneCoordinates: {
						column: '2 / 15',
						row: '17 / 23',
					},
				}}
			>
				Zone 5
			</ZoneTemplate>
			<ZoneTemplate
				zoneData={{
					zoneCoordinates: {
						column: '16 / 30',
						row: '17 / 23',
					},
				}}
			>
				Zone 6
			</ZoneTemplate>
			<ZoneTemplate
				zoneData={{
					zoneCoordinates: {
						column: '2 / 15',
						row: '23 / 29',
					},
				}}
			>
				Zone 7
			</ZoneTemplate>
			<ZoneTemplate
				zoneData={{
					zoneCoordinates: {
						column: '16 / 30',
						row: '23 / 29',
					},
				}}
			>
				Zone 8
			</ZoneTemplate>
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
			<PlanetContainer
				planetData={{
					name: 'ZOA',
					color: 'orange',
					coordinates: {
						column: '18 / 28',
						row: '19 / 24',
					},
					rings: 0,
				}}
			/>
			<PlanetContainer
				planetData={{
					name: 'DOA',
					color: 'pink',
					coordinates: {
						column: '5 / 15',
						row: '25 / 30',
					},
					rings: 0,
				}}
			/>
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
