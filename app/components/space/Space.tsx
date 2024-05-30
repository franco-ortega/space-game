import React, { ReactNode } from 'react';
import styles from './Space.module.css';
import randomNumber from '@/app/utils/randomNumber';
import createStar from '@/app/utils/createStar';

type Props = { children: ReactNode };

const radGradList = [];

do {
	radGradList.push(createStar());
} while (radGradList.length < 100);

const radGradItems = radGradList.reduce((a, c) => a + ', ' + c);

export default function Space({ children }: Props) {
	return (
		<div className={styles.Space}>
			<div
				style={{
					color: 'red',
					backgroundImage: radGradItems,
				}}
			>
				{children}
			</div>
		</div>
	);
}
