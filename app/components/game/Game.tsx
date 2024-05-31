import Link from 'next/link';
import styles from './Game.module.css';
import LinkButton from '../links/LinkButton';
import Planet from './planets/Planet';
import Ring from './planets/Ring';

type Props = {};

function Game({}: Props) {
	return (
		<main className={styles.Game}>
			<header>
				<h1>SPACE GAME</h1>
			</header>
			<section>
				{/* <Ring> */}
				<Planet name={'Aob'} color={'green'} column={'2 / 4'} row={'2 / 4'} />
				{/* </Ring> */}
				<Planet name={'Eob'} color={'red'} column={'5 / 7'} row={'5 / 7'} />
				<Planet name={'Iob'} color={'blue'} column={'8 / 10'} row={'8 / 10'} />
				<Planet name={'Uob'} color={'aqua'} column={'3 / 5'} row={'11 / 13'} />
				<Planet
					name={'Zob'}
					color={'lightgray'}
					column={'6 / 8'}
					row={'14 / 16'}
				/>
				<Planet
					name={'Gob'}
					color={'violet'}
					column={'4 / 6'}
					row={'17 / 19'}
				/>
			</section>
			<footer>
				<LinkButton src='/' text='Return' />
			</footer>
		</main>
	);
}

export default Game;
