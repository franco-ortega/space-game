import Link from 'next/link';
import styles from './Game.module.css';
import LinkButton from '../links/LinkButton';
import Planet from './planets/Planet';

type Props = {};

function Game({}: Props) {
	return (
		<main className={styles.Game}>
			<header>
				<h1>SPACE GAME</h1>
			</header>
			<section>
				<Planet name={'Aob'} column={'2 / 4'} row={'2 / 4'} />
				<Planet name={'Eob'} column={'5 / 7'} row={'5 / 7'} />
				<Planet name={'Iob'} column={'8 / 10'} row={'8 / 10'} />
				<Planet name={'Uob'} column={'3 / 5'} row={'11 / 13'} />
				<Planet name={'Zob'} column={'6 / 8'} row={'14 / 16'} />
				<Planet name={'Gob'} column={'4 / 6'} row={'17 / 19'} />
			</section>
			<footer>
				<LinkButton src='/' text='Return' />
			</footer>
		</main>
	);
}

export default Game;
