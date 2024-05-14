import { GameManager } from "./store";

export const stLogger = () => {
  setInterval(() => {
    GameManager.getInstance().logState();
  }, 5000);
};
