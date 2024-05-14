import { stLogger } from "./logger";
import { GameManager } from "./store";

stLogger();

setInterval(() => {
  GameManager.getInstance().addGame({
    id: Math.random().toString(),
    whitePlayerName: "Arnav",
    blackPlayerName: "Nikhil",
    moves: [],
  });
}, 5000);
