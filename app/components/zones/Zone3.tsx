import React from 'react';
import ZoneTemplate from './ZoneTemplate';
import PlanetContainer from '../planets/PlanetContainer';

type Props = {};

export default function Zone3({}: Props) {
	return (
		<ZoneTemplate
			zoneData={{
				zoneCoordinates: {
					column: '2 / 15',
					row: '11 / 17',
				},
			}}
		>
			<PlanetContainer
				planetData={{
					name: 'KOA',
					color: 'lightblue',
					coordinates: {
						column: '3 / 16',
						row: '13 / 19',
					},
					rings: 2,
				}}
			/>
		</ZoneTemplate>
	);
}
