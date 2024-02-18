import { createStore } from "./createStore";
import { increment, decrement } from "./redux/actions";
import { rootReducer } from "./redux/rootReducer";
import "./styles.css";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

const store = createStore(rootReducer, 0);

addBtn.addEventListener("click", () => {
  store.dispatch(increment());
});

subBtn.addEventListener("click", () => {
  store.dispatch(decrement());
});

asyncBtn.addEventListener("click", () => {});

store.subscribe(() => (counter.innerText = store.getState()));
store.dispatch({ type: "INIT_COUNTER" });

themeBtn.addEventListener("click", () => {
  //   document.body.classList.toggle("dark");
});
