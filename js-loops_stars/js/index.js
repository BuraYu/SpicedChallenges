console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i <= 5; i++) {
    if (filledStars >= 1) {
      const img = document.createElement("img");
      img.src = "assets/star-filled.svg";
      starContainer.append(img);
      filledStars--;
    } else {
      const img = document.createElement("img");
      img.src = "assets/star-empty.svg";
      starContainer.append(img);
    }
  }
  //--^-- your code here --^--
}

renderStars(5);
