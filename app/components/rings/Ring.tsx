import { ReactNode } from 'react';
import styles from './Ring.module.css';

type Props = {
	ringColor: string;
	ringWidth: string;
	ringPadding: string;
	children: ReactNode;
};

export default function Ring({
	ringColor = 'hsl(0, 0%, 100%)',
	ringWidth = '2px',
	ringPadding = '5px',
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
