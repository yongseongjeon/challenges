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
              <span class="rating-message">Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.</span>
            </div>`;
  }
  render() {
    this.container.innerHTML = this.template();
  }
}

export default RatingForm;
