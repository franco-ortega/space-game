import { PlanetData } from '@/app/types/types';
// import Planet from './Planet';
import styles from './PlanetContainer.module.css';

type Props = {
	planetData: PlanetData;
};

export default function PlanetContainer({ planetData }: Props) {
	const { ...planetDetails } = planetData;

	return (
		<div className={styles.PlanetContainer}>
			{/* <Planet planetDetails={planetDetails} /> */}
		</div>
	);
}
