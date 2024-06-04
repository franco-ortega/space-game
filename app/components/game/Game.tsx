import Planet from '../planets/Planet';
import LinkButton from '../links/LinkButton';
import styles from './Game.module.css';
import GamePosition from './GamePosition';

type Props = {};

function Game({}: Props) {
	return (
		<main className={styles.Game}>
			<header>
				<h1>SPACE GAME</h1>
			</header>

			<footer>
				<LinkButton src='/' text='Return' />
			</footer>
		</main>
	);
}

export default Game;
