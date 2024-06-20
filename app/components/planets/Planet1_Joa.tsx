import PlanetContainer from './PlanetContainer';

type Props = {};

export default function Planet1_Joa({}: Props) {
	return (
		<PlanetContainer
			planetData={{
				name: 'JOA',
				color: 'blue',
				coordinates: {
					column: '',
					row: '',
				},
				rings: 1,
			}}
		/>
	);
}
