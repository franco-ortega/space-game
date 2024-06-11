import Planet from '../planets/Planet';
import styles from './GameBoard.module.css';

type Props = {};

export default function GameBoard({}: Props) {
	return (
		<main className={styles.GameBoard}>
			<Planet
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
			/>
		</main>
	);
}
