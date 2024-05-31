import Link from 'next/link';
import styles from './Landing.module.css';
import LinkButton from '../links/LinkButton';

type Props = {};

function Landing({}: Props) {
	return (
		<main className={styles.Landing}>
			<section>
				<h1>
					<span>Welcome</span>
					<span>to</span>
					<span>the</span>
					<span>Space Game</span>
				</h1>
			</section>
			<section>
				<LinkButton src='/game' text='Click to Play' />
			</section>
		</main>
	);
}

export default Landing;
