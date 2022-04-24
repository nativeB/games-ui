export interface IGameState{
    games: IGame[];
}
export interface IGame{
    _id: string;
    userId: number;
    game: string;
    playTime: number;
    genre: string;
    platforms: string[];
}