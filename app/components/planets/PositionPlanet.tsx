import styles from './PositionPlanet.module.css';
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

export default function PositionPlanet({
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
							className={styles.PositionPlanet}
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
