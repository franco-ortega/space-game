import { PlanetData, RingData } from '@/app/types/types';
import Ring from '../rings/Ring';
import styles from './Planet.module.css';

type Props = {
	planetData: PlanetData;
};

export default function Planet({
	planetData: { name, color, width, rings },
}: Props) {
	const planetName = name.toUpperCase();

	const basePlanet = (
		<div className={styles.Planet} style={{ backgroundColor: color, width }}>
			<span>{planetName}</span>
		</div>
	);

	const completePlanet = rings.length
		? addRingsToPlanet(basePlanet, rings)
		: basePlanet;

	return <>{completePlanet}</>;
}

/* HELPER FUNCTION */
function addRingsToPlanet(planet: React.JSX.Element, rings: RingData) {
	let count = 0;

	while (count < rings.length) {
		planet = (
			<Ring
				ringColor={rings[count].ringColor}
				ringPadding={rings[count].ringPadding}
				ringWidth={rings[count].ringWidth}
			>
				{planet}
			</Ring>
		);
		count++;
	}

	return planet;
}
