import type { ICharactersService } from './characters'

export * from './characters'

export type MarvelService = {
  characters: ICharactersService
}