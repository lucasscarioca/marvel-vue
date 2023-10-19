import { api } from "../api"
import type { ComicData, ComicQuery } from "./dto"

export interface IComicsService {
  list: (params: ComicQuery) => Promise<ComicData>
}
export const comicsService: IComicsService = {
  list,
}

async function list(params: ComicQuery): Promise<ComicData> {
  const { data: { data: marvelData } } = await api.marvel.get('/comics', { params })
  return marvelData
}
