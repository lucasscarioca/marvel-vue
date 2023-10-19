export type StoryList = {
  available?: number,
  returned?: number,
  collectionURI?: string,
  items: StorySummary[],
}

type StorySummary = {
  resourceURI?: string,
  name?: string,
  type?: string,
}