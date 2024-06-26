import { PlanetData } from '@/app/types/types';
import styles from './Planet.module.css';

type Props = {
	planetData: PlanetData;
};

export default function Planet({
	planetData: { name, color, width, rings },
}: Props) {
	console.log(rings);

	return (
		<div className={styles.Planet} style={{ backgroundColor: color, width }}>
			<div>{name.toUpperCase()}</div>
		</div>
	);
}

/* HELPER FUNCTION */
// function addRingsToPlanet(planet: React.JSX.Element, amount: number) {
// 	let count = 0;
// 	let ringedPlanet = planet;

// 	while (count < amount) {
// 		ringedPlanet = <Ring>{ringedPlanet}</Ring>;
// 		count++;
// 	}

// 	return ringedPlanet;
// }
