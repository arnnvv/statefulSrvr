import { stLogger } from "./logger";
import { games } from "./store";

stLogger();

setInterval(() => {
  games.push({
    id: Math.random().toString(),
    whitePlayerName: "Arnav",
    blackPlayerName: "Nikhil",
    moves: [],
  });
}, 5000);
