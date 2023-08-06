import Star from "../Star/Star.js";

class FiveStar {
  constructor({ state }) {
    this.state = state;
  }
  template() {
    const { starRating } = this.state;
    return `<div class="star-container">
              ${Array.from({ length: 5 })
                .map((_, idx) => new Star().template({ isFilled: idx < starRating }))
                .join("")}
            </div>`;
  }
}

export default FiveStar;
