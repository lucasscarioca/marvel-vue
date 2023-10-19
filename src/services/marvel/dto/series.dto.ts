export type SeriesList = {
  available?: Number,
  returned?: Number,
  collectionURI?: string,
  items?: SeriesSummary[],
}

export type SeriesSummary = {
  resourceURI?: string,
  name?: string,
}