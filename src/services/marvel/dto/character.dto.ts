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
  id?: number,
  name?: string,
  description?: string,
  modified?: string,
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
  modifiedSince?: string,
  comics?: number,
  series?: number,
  events?: number,
  stories?: number,
  orderBy?: 'name' | 'modified' | '-name' | '-modified',
  limit?: number,
  offset?: number,
}

export type CharacterList = {
  available?: number,
  returned?: number,
  collectionURI?: string,
  items?: CharacterSummary[],
}

type CharacterSummary = {
  resourceURI?: string,
  name?: string,
  role?: string,
}