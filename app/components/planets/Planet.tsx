import { PlanetData, RingData } from '@/app/types/types';
import styles from './Planet.module.css';
import Ring from '../rings/Ring';

type Props = {
	planetData: PlanetData;
};

export default function Planet({
	planetData: { name, color, width, rings },
}: Props) {
	console.log(rings);
	const planetName = name.toUpperCase();

	const basePlanet = (
		<div className={styles.Planet} style={{ backgroundColor: color, width }}>
			<div>{planetName}</div>
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
	let ringedPlanet = planet;

	while (count < rings.length) {
		ringedPlanet = (
			<Ring
				ringColor={rings[count].ringColor}
				ringPadding={rings[count].ringPadding}
				ringWidth={rings[count].ringWidth}
			>
				{ringedPlanet}
			</Ring>
		);
		count++;
	}

	return ringedPlanet;
}
