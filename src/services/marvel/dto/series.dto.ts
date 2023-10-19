export type SeriesList = {
  available?: number,
  returned?: number,
  collectionURI?: string,
  items?: SeriesSummary[],
}

export type SeriesSummary = {
  resourceURI?: string,
  name?: string,
}