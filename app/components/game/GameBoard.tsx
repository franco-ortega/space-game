// import Planet from '../planets/Planet';
import PlanetContainer from '../planets/PlanetContainer';
import styles from './GameBoard.module.css';

type Props = {};

export default function GameBoard({}: Props) {
	return (
		<main className={styles.GameBoard}>
			<PlanetContainer
				planetData={{
					name: 'JOA',
					color: 'blue',
					coordinates: {
						column: '3 / 8',
						row: '3 / 8',
					},
					rings: 2,
				}}
			/>
			<PlanetContainer
				planetData={{
					name: 'KOA',
					color: 'lightblue',
					coordinates: {
						column: '6 / 13',
						row: '10 / 17',
					},
					rings: 4,
				}}
			/>
			<PlanetContainer
				planetData={{
					name: 'IOA',
					color: 'darkred',
					coordinates: {
						column: '15 / 19',
						row: '5 / 9',
					},
					rings: 0,
				}}
			/>
			<PlanetContainer
				planetData={{
					name: 'ZOA',
					color: 'orange',
					coordinates: {
						column: '13 / 16',
						row: '17 / 20',
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
