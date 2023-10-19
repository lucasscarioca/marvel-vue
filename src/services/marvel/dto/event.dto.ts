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
  id?: Number,
  title?: string,
  description?: string,
  resourceURI?: string,
  urls?: Url[],
  modified?: Date,
  start?: Date,
  end?: Date,
  thumbnail?: Image,
  comics?: ComicList,
  stories?: StoryList,
  series?: SeriesList,
  characters?: CharacterList,
  creators?: CreatorList,
  next?: EventSummary,
  previous?: EventSummary,
}

export type EventList = {
  available?: Number,
  returned?: Number,
  collectionURI?: string,
  items?: EventSummary[],
}

type EventSummary = {
  resourceURI?: string,
  name?: string,
}