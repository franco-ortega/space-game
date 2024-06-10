import styles from './Planet.module.css';

type Props = {
	name: string;
	color: string;
	column: string;
	row: string;
};

export default function Planet({ name, color, column, row }: Props) {
	return (
		<div className={styles.Planet} style={{ gridColumn: column, gridRow: row }}>
			<div style={{ backgroundColor: color }}>
				<div>{name.toUpperCase()}</div>
			</div>
		</div>
	);
}
