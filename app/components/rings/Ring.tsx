import { ReactNode } from 'react';
import styles from './Ring.module.css';

type Props = {
	ringWidth: string;
	ringColor: string;
	ringPadding: string;
	children: ReactNode;
};

export default function Ring({
	ringColor = 'yellow',
	ringPadding = '5px',
	ringWidth = '2px',
	children,
}: Props) {
	return (
		<div
			className={styles.Ring}
			style={{
				borderColor: ringColor,
				borderWidth: ringWidth,
				padding: ringPadding,
			}}
		>
			{children}
		</div>
	);
}
