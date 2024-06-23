export type GridCoordinates = {
  column: string;
  row: string;
};

export type PlanetData = {
  name: string;
  color: string;
  width: string;
};

export type ZoneData = {
  zoneCoordinates: GridCoordinates;
}