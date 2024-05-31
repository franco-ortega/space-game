import { ReactNode } from 'react';
import styles from './Ring.module.css';

type Props = { children: ReactNode };

export default function Ring({ children }: Props) {
	return (
		<div
			className={styles.Ring}
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
