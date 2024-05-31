import styles from './Planet.module.css';
import Ring from './Ring';

type Props = {
	name: string;
	color: string;
	column: string;
	row: string;
};

export default function Planet({ name, color, column, row }: Props) {
	return (
		<div
			className={styles.PlanetWrapper}
			style={{ gridColumn: column, gridRow: row }}
		>
			<Ring>
				<Ring>
					<Ring>
						<div className={styles.Planet} style={{ backgroundColor: color }}>
							<div>{name.toUpperCase()}</div>
						</div>
					</Ring>
				</Ring>
			</Ring>
		</div>
	);
}
