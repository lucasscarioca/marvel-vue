import type { Data, Image, Url, Wrapper } from "./api.dto"
import type { CharacterList } from "./character.dto"
import type { ComicList } from "./comic.dto"
import type { CreatorList } from "./creator.dto"
import type { SeriesList } from "./series.dto"
import type { StoryList } from "./story.dto"

export type EventWrapper = Wrapper & {
  data: EventData,
}

export type EventData = Data & {
  results?: Event[],
}

export type Event = {
  id?: number,
  title?: string,
  description?: string,
  resourceURI?: string,
  urls?: Url[],
  modified?: string,
  start?: string,
  end?: string,
  thumbnail?: Image,
  comics?: ComicList,
  stories?: StoryList,
  series?: SeriesList,
  characters?: CharacterList,
  creators?: CreatorList,
  next?: EventSummary,
  previous?: EventSummary,
}

export type EventQuery = {
  name?: string,
  nameStartsWith?: string,
  modifiedSince?: string,
  creators?: number,
  characters?: number,
  series?: number,
  comics?: number,
  stories?: number,
  orderBy?: 'name' | 'startstring' | 'modified' | '-name' | '-startstring' | '-modified',
  limit?: number,
  offset?: number,
}

export type EventList = {
  available?: number,
  returned?: number,
  collectionURI?: string,
  items?: EventSummary[],
}

type EventSummary = {
  resourceURI?: string,
  name?: string,
}