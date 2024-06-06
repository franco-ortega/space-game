import Planet from '../planets/Planet';
import styles from './GamePosition.module.css';

type Props = {};

export default function GamePosition({}: Props) {
	return (
		<section className={styles.GamePosition}>
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
	);
}
