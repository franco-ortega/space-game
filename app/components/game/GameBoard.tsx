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
				ring={true}
				rings={2}
			/>
			<Planet
				name={'KOA'}
				color={'lightgreen'}
				gridLocation={{
					column: '12 / 20',
					row: '10 / 18',
				}}
				ring={false}
				rings={1}
			/>
		</main>
	);
}
