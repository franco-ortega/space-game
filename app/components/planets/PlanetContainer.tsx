import { PlanetData } from '@/app/types/types';
import Planet from './Planet';

type Props = {
	planetData: PlanetData;
};

export default function PlanetContainer({ planetData }: Props) {
	const { name, color, rings, coordinates } = planetData;
	const { column, row } = coordinates;

	return (
		<div style={{ gridColumn: column, gridRow: row }}>
			<Planet name={name} color={color} rings={rings} />
		</div>
	);
}
