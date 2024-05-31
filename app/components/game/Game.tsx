import Planet from '../planets/Planet';
import LinkButton from '../links/LinkButton';
import styles from './Game.module.css';

type Props = {};

function Game({}: Props) {
	return (
		<main className={styles.Game}>
			<header>
				<h1>SPACE GAME</h1>
			</header>
			<section>
				<Planet
					name={'Aob'}
					color={'green'}
					top={'10%'}
					right={'0%'}
					bottom={'0%'}
					left={'10%'}
					width={'10vw'}
				/>
				<Planet
					name={'Eob'}
					color={'red'}
					top={'60%'}
					right={'0%'}
					bottom={'0%'}
					left={'20%'}
					width={'15vw'}
				/>
				<Planet
					name={'Iob'}
					color={'blue'}
					top={'40%'}
					right={'0%'}
					bottom={'0%'}
					left={'40%'}
					width={'5vw'}
				/>
				<Planet
					name={'Uob'}
					color={'aqua'}
					top={'30%'}
					right={'0%'}
					bottom={'0%'}
					left={'80%'}
					width={'10vw'}
				/>
				<Planet
					name={'Zob'}
					color={'lightgray'}
					top={'80%'}
					right={'0%'}
					bottom={'0%'}
					left={'60%'}
					width={'8vw'}
				/>
				<Planet
					name={'Gob'}
					color={'violet'}
					top={'70%'}
					right={'0%'}
					bottom={'0%'}
					left={'75%'}
					width={'12vw'}
				/>
			</section>
			{/* <section>
				<Planet name={'Aob'} color={'green'} column={'2 / 4'} row={'2 / 4'} />
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
			</section> */}
			<footer>
				<LinkButton src='/' text='Return' />
			</footer>
		</main>
	);
}

export default Game;
