export type StoryList = {
  available?: Number,
  returned?: Number,
  collectionURI?: string,
  items: StorySummary[],
}

type StorySummary = {
  resourceURI?: string,
  name?: string,
  type?: string,
}