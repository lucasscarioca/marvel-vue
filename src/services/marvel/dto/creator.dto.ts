export type CreatorList = {
  available?: Number,
  returned?: Number,
  collectionURI?: string,
  items?: CreatorSummary[],
}

type CreatorSummary = {
  resourceURI?: string,
  name?: string,
  role?: string,
}