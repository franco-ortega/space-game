import { ReactNode } from 'react';
import styles from './GridRingPlanet.module.css';

type Props = { children: ReactNode };

export default function GridRingPlanet({ children }: Props) {
	return (
		<div
			className={styles.GridRingPlanet}
			style={{
				borderColor: 'pink',
				borderWidth: '2px',
				borderStyle: 'solid',
				padding: '1vw',
			}}
		>
			{children}
		</div>
	);
}
