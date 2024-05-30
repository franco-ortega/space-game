import Link from 'next/link';
import styles from './Game.module.css';

type Props = {};

function Game({}: Props) {
	return (
		<main className={styles.Game}>
			<header>
				<h1>SPACE GAME</h1>
			</header>
			<footer>
				<Link href={'/'}>
					<span>Return</span>
				</Link>
			</footer>
		</main>
	);
}

export default Game;
