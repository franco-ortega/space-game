import styles from './Planet.module.css';

type Props = {
	column: string;
	row: string;
};

export default function Planet({ column, row }: Props) {
	return (
		<div className={styles.Planet} style={{ gridColumn: column, gridRow: row }}>
			Planet
		</div>
	);
}
