export interface IGameState {
  games: IGame[];
  totalRecords: number;
}
export interface IGame {
  _id: string;
  userId: number;
  game: string;
  playTime: number;
  genre: string;
  platforms: string[];
}
