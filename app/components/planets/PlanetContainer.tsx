import { PlanetData } from '@/app/types/types';
import Planet from './Planet';

type Props = {
	planetData: PlanetData;
};

export default function PlanetContainer({ planetData }: Props) {
	const { coordinates, ...planetDetails } = planetData;
	const { column, row } = coordinates;

	return (
		<div style={{ gridColumn: column, gridRow: row }}>
			<Planet planetDetails={planetDetails} />
		</div>
	);
}
