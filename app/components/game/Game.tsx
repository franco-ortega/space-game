import styles from './Game.module.css';

type Props = {};

function Game({}: Props) {
	return (
		<main className={styles.Game}>
			<header>
				<h1>SPACE GAME</h1>
			</header>
		</main>
	);
}

export default Game;
