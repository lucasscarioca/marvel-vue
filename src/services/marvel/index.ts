import type { ICharactersService } from './characters'
import type { IComicsService } from './comics'
import type { IEventService } from './events'

export * from './characters'
export * from './comics'
export * from './events'

export type MarvelService = {
  characters: ICharactersService,
  comics: IComicsService,
  events: IEventService,
}