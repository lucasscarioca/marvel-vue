import { api } from "../api"
import type { CharacterData, CharacterQuery } from "./dto"

export interface ICharactersService {
  list: (params: CharacterQuery) => Promise<CharacterData>
}
export const charactersService: ICharactersService = {
  list: list
}

async function list(params: CharacterQuery): Promise<CharacterData> {
  const { data: { data: marvelData } } = await api.marvel.get('/characters', { params })
  return marvelData
}