import styles from './Landing.module.css';

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
				<button>Click to Play</button>
			</section>
		</main>
	);
}

export default Landing;
