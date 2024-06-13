import React, { ReactNode } from 'react';
import createStars from '@/app/utils/createStars';
import styles from './Space.module.css';

type Props = { children: ReactNode };

const stars = createStars(500);

export default function Space({ children }: Props) {
	return (
		<div className={styles.Space}>
			<div
				style={{
					background: stars,
				}}
			>
				{children}
			</div>
		</div>
	);
}
