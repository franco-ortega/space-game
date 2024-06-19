import React from 'react';
import ZoneTemplate from './ZoneTemplate';
import PlanetContainer from '../planets/PlanetContainer';

type Props = {};

export default function ZoneOne({}: Props) {
	return (
		<ZoneTemplate
			zoneData={{
				zoneCoordinates: {
					column: '2 / 15',
					row: '5 / 11',
				},
			}}
		>
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
		</ZoneTemplate>
	);
}
