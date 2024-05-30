import styles from './Landing.module.css';

type Props = {};

function Landing({}: Props) {
	return (
		<div className={styles.Landing}>
			<h1>
				<span>Welcome</span>
				<span>to</span>
				<span>the</span>
				<span>Space Game</span>
			</h1>
		</div>
	);
}

export default Landing;
