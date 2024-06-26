export type GridCoordinates = {
  column: string;
  row: string;
};

export type RingData = {
  ringColor: string,
  ringPadding: string,
  ringWidth: string,
}[]

export type PlanetData = {
  name: string;
  color: string;
  width: string;
  rings: RingData;
};

export type ZoneData = {
  zoneCoordinates: GridCoordinates;
}