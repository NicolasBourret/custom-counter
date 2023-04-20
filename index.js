import { increase, decrease } from "./src/utils/helpers.js";

let count = 0;

const countResult = document.querySelector("#count-result");
const increaseButton = document.querySelector("#increase-button");
const decreaseButton = document.querySelector("#decrease-button");

const renderCountResult = (result) =>
  (countResult.textContent = `count: ${result}`);
const handleIncreaseButton = () => {
  count = increase(count);
  renderCountResult(count);
};
const handleDecreaseBustton = () => {
  count = decrease(count);
  renderCountResult(count);
};

renderCountResult(count);
increaseButton.addEventListener("click", handleIncreaseButton);
decreaseButton.addEventListener("click", handleDecreaseBustton);
