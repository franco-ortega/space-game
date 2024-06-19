import React from 'react';
import ZoneTemplate from './ZoneTemplate';
import PlanetContainer from '../planets/PlanetContainer';

type Props = {};

export default function ZoneTwo({}: Props) {
	return (
		<ZoneTemplate
			zoneData={{
				zoneCoordinates: {
					column: '16 / 30',
					row: '5 / 11',
				},
			}}
		>
			<PlanetContainer
				planetData={{
					name: 'IOA',
					color: 'darkred',
					coordinates: {
						column: '17 / 27',
						row: '6 / 12',
					},
					rings: 0,
				}}
			/>
		</ZoneTemplate>
	);
}
