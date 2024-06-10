import { ReactNode } from 'react';
import styles from './Ring.module.css';

type Props = {
	children: ReactNode;
};

export default function Ring({ children }: Props) {
	return <div className={styles.Ring}>{children}</div>;
}
