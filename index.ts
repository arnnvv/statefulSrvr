import { stLogger } from "./logger";
import { GameManager } from "./store";
import { PubSubManager } from "./pubsubManager";

stLogger();

setInterval(() => {
  GameManager.getInstance().addGame({
    id: Math.random().toString(),
    whitePlayerName: "Arnav",
    blackPlayerName: "Nikhil",
    moves: [],
  });
}, 5000);

setInterval(() => {
  PubSubManager.getInstance().userSunscribe(Math.random().toString(), "APPL");
}, 5000);
