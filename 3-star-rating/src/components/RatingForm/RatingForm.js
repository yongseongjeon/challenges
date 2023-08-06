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
  const { target } = e;
  const isClickedStar = target.tagName === "path";
  if (isClickedStar) {
    const clickedStarIndex = getStarIndex(target);
    setState({ starRating: clickedStarIndex + 1 });
  }
}

function getStarIndex(target) {
  const star = target.parentNode;
  const stars = [...star.parentNode.children];
  return stars.indexOf(star);
}

export default RatingForm;
