import { PlanetData, ZoneData } from '../types/types';
import Orbit from '../components/orbit/Orbit';
import Planet from '../components/planets/Planet';
import { Dispatch, SetStateAction } from 'react';

/*
a PLANET is comprised of:
- ORBIT parent component
- PLANET child component 
*/

export default function createPlanet(
	planetData: PlanetData,
	setShipLocation: Dispatch<SetStateAction<{ column: string; row: string }>>,
	zoneData: { column: string; row: string }
) {
	return function CreatePlanet() {
		return (
			<Orbit planetPosition={planetData.orbit}>
				<Planet
					planetData={planetData}
					setShipLocation={setShipLocation}
					zoneData={zoneData}
				/>
			</Orbit>
		);
	};
}
