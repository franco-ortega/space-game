import React from 'react';
import ZoneTemplate from './ZoneTemplate';
import PlanetContainer from '../planets/PlanetContainer';
import { ZoneData } from '@/app/types/types';

type Props = {
	zoneData: ZoneData;
};

export default function Zone2({ zoneData }: Props) {
	return (
		<ZoneTemplate zoneData={zoneData}>
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
