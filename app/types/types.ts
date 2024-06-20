export type GridLocation = {
  column: string;
  row: string;
};

export type GridCoordinates = {
  column: string;
  row: string;
};

export type PlanetData = {
  name: string;
  color: string;
	rings: number;
	coordinates: GridLocation
};

export type ZoneData = {
  column: string;
  row: string;
}