import { PlanetData } from '@/app/types/types';
import Planet from './Planet';
import styles from './PlanetContainer.module.css';

type Props = {
	planetData: PlanetData;
};

export default function PlanetContainer({ planetData }: Props) {
	const { coordinates, ...planetDetails } = planetData;
	const { column, row } = coordinates;

	return (
		<div
			className={styles.PlanetContainer}
			style={{ gridColumn: column, gridRow: row }}
		>
			<Planet planetDetails={planetDetails} />
		</div>
	);
}
