import { gameManager } from "./store";

export const stLogger = () => {
  setInterval(() => {
    gameManager.logState();
  }, 5000);
};
