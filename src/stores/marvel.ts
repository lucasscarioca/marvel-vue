import type { MarvelService } from '@/services/marvel'
import type { Comic, ComicQuery, CharacterData, CharacterQuery } from '@/services/marvel/dto'
import { defineStore } from 'pinia'
import { inject, ref } from 'vue'

export const useMarvelStore = defineStore('marvel', () => {
  const marvel = inject('marvel') as MarvelService
  const characters = ref<CharacterData>({})
  const comicsByCharId = ref<{[id: number]: Comic[]}>({})

  const listCharacters = async (query: CharacterQuery = {limit: 6, offset: 0}) => {
    characters.value = await marvel.characters.list(query)

    return characters.value
  }

  const findCharacter = async (id: number) => {
    const cachedChar = characters.value.results?.find(c => c.id === id) 
    if (cachedChar) return cachedChar

    return await marvel.characters.find(id)
  }

  const listCharacterComics = async (id: number, query: ComicQuery = {limit: 4, offset: 0}) => {
    const cachedComics = comicsByCharId.value[id]
    if (cachedComics) return cachedComics

    const response = await marvel.characters.listComics(id, query)
    comicsByCharId.value[id] = response
    return response
  }

  return { listCharacters, findCharacter, listCharacterComics }
})