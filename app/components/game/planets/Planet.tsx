import styles from './Planet.module.css';

type Props = {
	name: string;
	color: string;
	column: string;
	row: string;
};

export default function Planet({ name, color, column, row }: Props) {
	return (
		<div
			className={styles.Planet}
			style={{ backgroundColor: color, gridColumn: column, gridRow: row }}
		>
			<div>{name.toUpperCase()}</div>
		</div>
	);
}
