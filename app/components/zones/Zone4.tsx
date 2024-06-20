import React from 'react';
import ZoneTemplate from './ZoneTemplate';
import PlanetContainer from '../planets/PlanetContainer';

type Props = {};

export default function Zone4({}: Props) {
	return (
		<ZoneTemplate
			zoneData={{
				zoneCoordinates: {
					column: '16 / 30',
					row: '11 / 17',
				},
			}}
		>
			{/* Zone 4 */}
		</ZoneTemplate>
	);
}
