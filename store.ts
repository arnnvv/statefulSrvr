interface Game {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
}

class GameManager {
  private games: Game[] = [];

  public addGame(game: Game) {
    this.games.push(game);
  }

  public getGames() {
    return this.games;
  }

  public addMove(gameId: string, move: string) {
    const game = this.games.find((g) => g.id === gameId);
    if (game) game.moves.push(move);
  }

  public logState() {
    console.log(this.games);
  }
}

export const gameManager = new GameManager();
