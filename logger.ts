import { games } from "./store";

export const stLogger = () => {
  setInterval(() => {
    console.log(games);
  }, 5000);
};
