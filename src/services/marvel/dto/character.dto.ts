import type { Data, Url, Wrapper, Image } from "./api.dto"
import type { ComicList } from "./comic.dto"
import type { EventList } from "./event.dto"
import type { SeriesList } from "./series.dto"
import type { StoryList } from "./story.dto"

export type CharacterWrapper = Wrapper & {
  data: CharacterData,
}

export type CharacterData = Data & {
  results?: Character[],
}

export type Character = {
  id?: Number,
  name?: string,
  description?: string,
  modified?: Date,
  resourceURI?: string,
  urls?: Url[],
  thumbnail?: Image,
  comics?: ComicList,
  stories?: StoryList,
  events?: EventList,
  series?: SeriesList,
}

export type CharacterQuery = {
  name?: string,
  nameStartsWith?: string,
  modifiedSince?: Date,
  comics?: Number,
  series?: Number,
  events?: Number,
  stories?: Number,
  orderBy?: 'name' | 'modified' | '-name' | '-modified',
  limit?: Number,
  offset?: Number,
}

export type CharacterList = {
  available?: Number,
  returned?: Number,
  collectionURI?: string,
  items?: CharacterSummary[],
}

type CharacterSummary = {
  resourceURI?: string,
  name?: string,
  role?: string,
}