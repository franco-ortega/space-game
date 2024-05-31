import GridPlanet from '../planets/GridPlanet';
import LinkButton from '../links/LinkButton';
import styles from './GameGrid.module.css';

type Props = {};

export default function GameGrid({}: Props) {
	return (
		<main className={styles.GameGrid}>
			<header>
				<h1>SPACE GAME</h1>
			</header>

			<section>
				<GridPlanet
					name={'Aob'}
					color={'green'}
					column={'2 / 4'}
					row={'2 / 4'}
				/>
				<GridPlanet name={'Eob'} color={'red'} column={'5 / 8'} row={'5 / 8'} />
				<GridPlanet
					name={'Iob'}
					color={'blue'}
					column={'8 / 10'}
					row={'8 / 10'}
				/>
				<GridPlanet
					name={'Uob'}
					color={'aqua'}
					column={'2 / 6'}
					row={'9 / 13'}
				/>
				<GridPlanet
					name={'Zob'}
					color={'lightgray'}
					column={'6 / 9'}
					row={'13 / 16'}
				/>
				<GridPlanet
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
