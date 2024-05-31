import GridPlanet from './GridPlanet';
import GridRing from './GridRing';
import styles from './GridRingPlanet.module.css';

type Props = {};
// type Props = { children: ReactNode };

export default function GridRingPlanet({}: Props) {
	return (
		<div className={styles.GridRingPlanet}>
			<GridRing>
				<GridRing>
					<GridPlanet
						name={'Kob'}
						color={'pink'}
						column={'3 / 5'}
						row={'4 / 6'}
					/>
				</GridRing>
			</GridRing>
		</div>
	);
}
