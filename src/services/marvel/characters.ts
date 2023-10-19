import { api } from "../api"
import type { Character, CharacterData, CharacterQuery, Comic, ComicQuery } from "./dto"

export interface ICharactersService {
  list: (params: CharacterQuery) => Promise<CharacterData>
  find: (id: number) => Promise<Character>
  listComics: (id: number, params: ComicQuery) => Promise<Comic[]>
}
export const charactersService: ICharactersService = {
  list,
  find,
  listComics,
}

async function list(params: CharacterQuery): Promise<CharacterData> {
  const { data: { data: marvelData } } = await api.marvel.get('/characters', { params })
  return marvelData
}

async function find(id: number): Promise<Character> {
  const { data: { data: marvelData } } = await api.marvel.get(`/characters/${id}`)
  return marvelData.results[0]
}

async function listComics(id: number, params: ComicQuery): Promise<Comic[]> {
  const { data: { data: marvelData } } = await api.marvel.get(`/characters/${id}/comics`, { params })
  return marvelData.results
}