import { stLogger } from "./logger";
import { gameManager } from "./store";

stLogger();

setInterval(() => {
  gameManager.addGame({
    id: Math.random().toString(),
    whitePlayerName: "Arnav",
    blackPlayerName: "Nikhil",
    moves: [],
  });
}, 5000);
