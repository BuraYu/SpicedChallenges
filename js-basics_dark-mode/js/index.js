console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkButton = document.querySelector('[data-js="dark-mode-button"');
const lightButton = document.querySelector('[data-js="light-mode-button"');
const toggleButton = document.querySelector('[data-js="toggle-button"');

darkButton.addEventListener("click", () => {
  console.log("dark button works");
  bodyElement.classList.remove("button--light");
  bodyElement.classList.remove("button--toggle");
  bodyElement.classList.add("button--dark");
});

lightButton.addEventListener("click", () => {
  console.log("light button works");
  bodyElement.classList.remove("button--dark");
  bodyElement.classList.remove("button--toggle");
  bodyElement.classList.add("button--light");
});

toggleButton.addEventListener("click", () => {
  console.log("toggle button works");
  bodyElement.classList.remove("button--dark");
  bodyElement.classList.remove("button--light");
  bodyElement.classList.add("button--toggle");
});
