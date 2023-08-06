import { RATING_MESSAGE } from "../../constants/message.js";
import { setState } from "../../script.js";
import FiveStar from "../FiveStar/FiveStar.js";

class RatingForm {
  constructor({ container, state }) {
    this.container = container;
    this.state = state;
  }
  template() {
    return `<div class="rating-form">
              <span class="rating-header">How many stars would you give to our Online Code Editor?</span>
              ${new FiveStar({ state: this.state }).template()}
              <span class="rating-message">${RATING_MESSAGE[this.state.starRating]}</span>
            </div>`;
  }
  render() {
    this.container.innerHTML = this.template();
    this.addEvent();
  }
  addEvent() {
    document.querySelector(".star-container").addEventListener("click", (e) => handleStarClick(e));
  }
}

function handleStarClick(e) {
  if (e.target.tagName === "path") {
    const children = Array.from(e.target.parentNode.parentNode.children);
    const idx = children.indexOf(e.target.parentNode);
    setState({ starRating: idx + 1 });
  }
}

export default RatingForm;
