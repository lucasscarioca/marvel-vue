import axios from "axios";
import md5 from 'md5'

const ts = new Date().getTime()
export const api = {
  marvel: axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/',
    params: {
      apikey: import.meta.env.VITE_API_PUBLIC_KEY,
      ...(import.meta.env.VITE_APP_ENV === 'prod' ? {} : {
        ts: ts,
        hash: md5(`${ts}${import.meta.env.VITE_API_PRIVATE_KEY}${import.meta.env.VITE_API_PUBLIC_KEY}`)
      })
    }
  }),
}