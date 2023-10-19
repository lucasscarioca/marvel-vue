import type { ICharactersService } from './characters'
import type { IComicsService } from './comics'

export * from './characters'
export * from './comics'

export type MarvelService = {
  characters: ICharactersService,
  comics: IComicsService,
}