import GameBoard from './GameBoard';
import LinkButton from '../links/LinkButton';
import styles from './Game.module.css';

function Game() {
	return (
		<div className={styles.Game}>
			<header>
				<h1>SPACE GAME</h1>
			</header>

			<GameBoard />

			<footer>
				<LinkButton src='/' text='Return' />
			</footer>
		</div>
	);
}

export default Game;
