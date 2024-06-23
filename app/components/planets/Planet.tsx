import Ring from '../rings/Ring';
import styles from './Planet.module.css';

type Props = {
	planetDetails: {
		name: string;
		color: string;
		rings: number;
		width: string;
	};
};

export default function Planet({ planetDetails }: Props) {
	const { name, color, rings, width } = planetDetails;

	const planet = (
		<div className={styles.Planet} style={{ backgroundColor: color, width }}>
			<div>{name.toUpperCase()}</div>
		</div>
	);

	const completePlanet = rings ? addRingsToPlanet(planet, rings) : planet;

	return <>{completePlanet}</>;
}

/* HELPER FUNCTION */
function addRingsToPlanet(planet: React.JSX.Element, amount: number) {
	let count = 0;
	let ringedPlanet = planet;

	while (count < amount) {
		ringedPlanet = <Ring>{ringedPlanet}</Ring>;
		count++;
	}

	return ringedPlanet;
}
