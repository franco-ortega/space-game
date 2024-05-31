import { ReactNode } from 'react';
import styles from './GridRing.module.css';

type Props = { children: ReactNode };

export default function GridRing({ children }: Props) {
	return (
		<div
			className={styles.GridRing}
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
