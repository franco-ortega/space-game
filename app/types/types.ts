export type GridCoordinates = {
  column: string;
  row: string;
};

export type PlanetData = {
  name: string;
  color: string;
  width: string;
  rings: {
    ringColor: string,
    ringPadding: string,
    ringWidth: string,
  }[]
};

export type ZoneData = {
  zoneCoordinates: GridCoordinates;
}