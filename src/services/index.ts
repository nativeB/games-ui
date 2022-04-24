import { IGameState } from "@/@types";
import axios, { AxiosPromise } from "axios";
const instance = axios.create({
  baseURL: process.env.VUE_APP_SERVER_URL,
  timeout: 1000,
});
export function getGames(query: unknown): Promise<AxiosPromise<IGameState>> {
  return instance.get("/games", {
    params: query || {},
  });
}
