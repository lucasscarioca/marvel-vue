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
  id?: Number,
  digitalId?: Number,
  title?: string,
  issueNumber?: Number,
  variantDescription?: string,
  description?: string,
  modified?: Date,
  isbn?: string,
  upc?: string,
  diamondCode?: string,
  ean?: string,
  issn?: string,
  format?: string,
  pageCount?: Number,
  textObjects?: TextObject[],
  resourceURI?: string,
  urls?: Url[],
  series?: SeriesSummary,
  variants?: ComicSummary[],
  collections?: ComicSummary[],
  collectedIssues?: ComicSummary[],
  dates?: ComicDate[],
  prices?: ComicPrice[],
  thumbnail?: Image,
  images?: Image[],
  creators?: CreatorList,
  characters?: CharacterList,
  stories?: StoryList,
  events?: EventList,
}

export type ComicList = {
  available?: Number,
  returned?: Number,
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

type ComicDate = {
  type?: string,
  date?: Date,
}

type ComicPrice = {
  type?: string,
  price?: Number,
}
