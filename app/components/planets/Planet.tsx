import { PlanetData, RingData, ZoneData } from '@/app/types/types';
import Ring from '../rings/Ring';
import styles from './Planet.module.css';
import { Dispatch, SetStateAction } from 'react';

type Props = {
	planetData: PlanetData;
	setShipLocation: Dispatch<SetStateAction<{ column: string; row: string }>>;
};

export default function Planet({
	planetData: { name, color, width, rings },
	setShipLocation,
}: Props) {
	const planetName = name.toUpperCase();

	function onPlanetClick() {
		console.log(`${planetName} clicked`);
		setShipLocation((prev) => {
			console.log(prev);
			return prev;
		});
	}

	const basePlanet = (
		<button
			className={styles.Planet}
			style={{ backgroundColor: color, width }}
			onClick={onPlanetClick}
		>
			<span>{planetName}</span>
		</button>
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
