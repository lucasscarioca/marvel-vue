export type CreatorList = {
  available?: number,
  returned?: number,
  collectionURI?: string,
  items?: CreatorSummary[],
}

type CreatorSummary = {
  resourceURI?: string,
  name?: string,
  role?: string,
}