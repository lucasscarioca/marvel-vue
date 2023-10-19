import { api } from "../api"
import type { EventData, EventQuery } from "./dto"

export interface IEventService {
  list: (params: EventQuery) => Promise<EventData>
}
export const eventsService: IEventService = {
  list,
}

async function list(params: EventQuery): Promise<EventData> {
  const { data: { data: marvelData } } = await api.marvel.get('/events', { params })
  return marvelData
}
