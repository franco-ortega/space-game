import React from 'react';
import ZoneTemplate from './ZoneTemplate';
import PlanetContainer from '../planets/PlanetContainer';
import { ZoneData } from '@/app/types/types';

type Props = {
	zoneData: ZoneData;
};

export default function Zone1({ zoneData }: Props) {
	console.log({ zoneData });
	return (
		<ZoneTemplate zoneData={zoneData}>
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
