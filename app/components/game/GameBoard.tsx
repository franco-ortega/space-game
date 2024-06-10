import Planet from '../planets/Planet';
import styles from './GameBoard.module.css';

type Props = {};

export default function GameBoard({}: Props) {
	return (
		<main className={styles.GameBoard}>
			<Planet
				name={'JOA'}
				color={'blue'}
				column={'2 / 8'}
				row={'2 / 8'}
				ring={true}
			/>
		</main>
	);
}
