import styles from './Planet.module.css';
import Ring from './Ring';

type Props = {
	name: string;
	color: string;
	top: string;
	right: string;
	bottom: string;
	left: string;
	width: string;
};

export default function Planet({
	name,
	color,
	top,
	right,
	bottom,
	left,
	width,
}: Props) {
	return (
		<div className={styles.PlanetWrapper} style={{ top, right, bottom, left }}>
			<Ring>
				<Ring>
					<Ring>
						<div
							className={styles.Planet}
							style={{ backgroundColor: color, width }}
						>
							<div>{name.toUpperCase()}</div>
						</div>
					</Ring>
				</Ring>
			</Ring>
		</div>
	);
}

// export default function Planet({ name, color, column, row }: Props) {
// 	return (
// 		<div
// 			className={styles.PlanetWrapper}
// 			style={{ gridColumn: column, gridRow: row }
//     }
// 		>
// 			<Ring>
// 				<Ring>
// 					<Ring>
// 						<div className={styles.Planet} style={{ backgroundColor: color }}>
// 							<div>{name.toUpperCase()}</div>
// 						</div>
// 					</Ring>
// 				</Ring>
// 			</Ring>
// 		</div>
// 	);
// }
