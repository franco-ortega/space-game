import { ZoneData } from '@/app/types/types';
import ZoneTemplate from './ZoneTemplate';

type Props = {
	zoneData: ZoneData;
	children: React.ReactNode;
};

export default function Zone1({ zoneData, children }: Props) {
	console.log({ zoneData });
	return <ZoneTemplate zoneData={zoneData}>{children}</ZoneTemplate>;
}

// import PlanetContainer from '../planets/PlanetContainer';
// import Planet1_Joa from '../planets/Planet1_Joa';
{
	/* <PlanetContainer
				planetData={{
					name: 'JOA',
					color: 'blue',
					coordinates: {
						column: '',
						row: '',
					},
					rings: 1,
				}}
			/> */
}
