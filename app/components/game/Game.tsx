import Link from 'next/link';
import styles from './Game.module.css';
import LinkButton from '../links/LinkButton';

type Props = {};

function Game({}: Props) {
	return (
		<main className={styles.Game}>
			<header>
				<h1>SPACE GAME</h1>
			</header>
			<section></section>
			<footer>
				<LinkButton src='/' text='Return' />
			</footer>
		</main>
	);
}

export default Game;
