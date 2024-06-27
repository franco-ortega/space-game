import { PlanetData } from '../types/types';
import Orbit from '../components/orbit/Orbit';
import Planet from '../components/planets/Planet';

/*
a PLANET is comprised of:
- ORBIT parent component
- PLANET child component 
*/

export default function createPlanet(planetData: PlanetData) {
	return function CreatePlanet() {
		return (
			<Orbit planetPosition={planetData.orbit}>
				<Planet planetData={planetData} />
			</Orbit>
		);
	};
}
