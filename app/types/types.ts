export type GridCoordinates = {
  column: string;
  row: string;
};

export type RingData = {
  ringColor: string,
  ringPadding: string,
  ringWidth: string,
}[]

export type OrbitData = {
  alignItems:  string,
	justifyContent: string,
}

export type PlanetData = {
  name: string;
  color: string;
  width: string;
  rings: RingData;
  orbit: OrbitData
};

export type ZoneData = {
  zoneCoordinates: GridCoordinates;
}