import type { Data, Image, Url, Wrapper } from "./api.dto";
import type { CharacterList } from "./character.dto";
import type { CreatorList } from "./creator.dto";
import type { EventList } from "./event.dto";
import type { SeriesSummary } from "./series.dto";
import type { StoryList } from "./story.dto";

export type ComicWrapper = Wrapper & {
  data: ComicData,
}

export type ComicData = Data & {
  results?: Comic[],
}

export type Comic = {
  id?: number,
  digitalId?: number,
  title?: string,
  issuenumber?: number,
  variantDescription?: string,
  description?: string,
  modified?: string,
  isbn?: string,
  upc?: string,
  diamondCode?: string,
  ean?: string,
  issn?: string,
  format?: string,
  pageCount?: number,
  textObjects?: TextObject[],
  resourceURI?: string,
  urls?: Url[],
  series?: SeriesSummary,
  variants?: ComicSummary[],
  collections?: ComicSummary[],
  collectedIssues?: ComicSummary[],
  dates?: Comicstring[],
  prices?: ComicPrice[],
  thumbnail?: Image,
  images?: Image[],
  creators?: CreatorList,
  characters?: CharacterList,
  stories?: StoryList,
  events?: EventList,
}

export type ComicQuery = {
  format?: string,
  formatType?: string,
  noVariants?: boolean,
  dateDescriptor?: string,
  dateRange?: number,
  title?: string,
  titleStartsWith?: string,
  startYear?: number,
  issueNumber?: number,
  diamondCode?: string,
  digitalId?: number,
  upc?: string,
  isbn?: string,
  ean?: string,
  issn?: string,
  hasDigitalIssue?: boolean,
  modifiedSince?: string,
  creators?: number,
  series?: number,
  events?: number,
  stories?: number,
  sharedAppearances?: number,
  collaborators?: number,
  orderBy?: 'focstring' | 'onsalesstring' | 'title' | 'issueNumber' | 'modified' | '-focstring' | '-onsalesstring' | '-title' | '-issueNumber' | '-modified',
  limit?: number,
  offset?: number,
}

export type ComicList = {
  available?: number,
  returned?: number,
  collectionURI?: string,
  items?: ComicSummary[],
}

type ComicSummary = {
  resourceURI?: string,
  name?: string,
}

type TextObject = {
  type?: string,
  language?: string,
  text?: string,
}

type Comicstring = {
  type?: string,
  date?: string,
}

type ComicPrice = {
  type?: string,
  price?: number,
}
