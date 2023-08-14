function Button({ type, title }) {
  return `<button class="button ${title}-button ${getBackgroundColorClassName(type)}" type="button">${title}</button>`;
}

export default Button;

function getBackgroundColorClassName(type) {
  const color = {
    success: "green",
    info: "blue",
    warning: "orange",
    error: "red",
  };
  return color[type];
}
