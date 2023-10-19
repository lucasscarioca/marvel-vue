import { charactersService, comicsService } from "@/services/marvel";
import type { App } from "vue";

export default {
  install: (app: App) => {
    app.provide('marvel', {
      characters: charactersService,
      comics: comicsService,
    })
  }
}