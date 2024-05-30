import React, { ReactNode } from 'react';
import styles from './Space.module.css';
import createSpace from '@/app/utils/createSpace';

type Props = { children: ReactNode };

const space = createSpace(500);

export default function Space({ children }: Props) {
	return (
		<div className={styles.Space}>
			<div
				style={{
					color: 'red',
					backgroundImage: space,
				}}
			>
				{children}
			</div>
		</div>
	);
}
