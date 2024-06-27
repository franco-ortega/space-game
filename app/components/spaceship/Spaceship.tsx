import Image from 'next/image';
import styles from './Spaceship.module.css';

type Props = {
	ship: string;
};

export default function Spaceship({ ship }: Props) {
	return (
		<div className={styles.Spaceship}>
			<Image alt='spaceship' src={ship} />
		</div>
	);
}
