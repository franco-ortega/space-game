import React from 'react';
import ZoneTemplate from './ZoneTemplate';
import PlanetContainer from '../planets/PlanetContainer';
import { ZoneData } from '@/app/types/types';

type Props = {
	zoneData: ZoneData;
};

export default function Zone3({ zoneData }: Props) {
	return (
		<ZoneTemplate zoneData={zoneData}>
			<PlanetContainer
				planetData={{
					name: 'KOA',
					color: 'lightblue',
					coordinates: {
						column: '', // '3 / 16',
						row: '', // '13 / 19',
					},
					rings: 2,
				}}
			/>
		</ZoneTemplate>
	);
}
