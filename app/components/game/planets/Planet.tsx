import styles from './Planet.module.css';

type Props = {
	name: string;
	column: string;
	row: string;
};

export default function Planet({ name, column, row }: Props) {
	return (
		<div className={styles.Planet} style={{ gridColumn: column, gridRow: row }}>
			{name.toUpperCase()}
		</div>
	);
}
