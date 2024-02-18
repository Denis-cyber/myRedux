import { DECREMENT, INCREMENT, ASYNC_INCREMENT } from "./types";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const asyncIncrement = () => ({ type: ASYNC_INCREMENT });
