import styles from './GridPlanet.module.css';

type Props = {
	name: string;
	color: string;
	column: string;
	row: string;
};

export default function GridPlanet({ name, color, column, row }: Props) {
	return (
		<div
			className={styles.GridPlanetWrapper}
			style={{ gridColumn: column, gridRow: row }}
		>
			<div className={styles.GridPlanet} style={{ backgroundColor: color }}>
				<div>{name.toUpperCase()}</div>
			</div>
		</div>
	);
}
