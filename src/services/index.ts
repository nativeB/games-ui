import { IGameState } from "@/@types";
import axios from "axios";
console.log(process.env);
const instance = axios.create({
  baseURL: process.env.VUE_APP_SERVER_URL,
  timeout: 1000,
});

export function getGames(query: unknown): Promise<IGameState["games"]> {
  return instance.get("/games", {
    params: query || {},
  });
}
