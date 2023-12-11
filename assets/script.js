// Retrieve arrows and banner elements from the DOM
const flechegauche = document.querySelector(".arrow_left");
const flechedroite = document.querySelector(".arrow_right");
const bannerTagline = document.querySelector(".banner-tagline");
const bannerImg = document.querySelector(".banner-img");

// Declare variables
let slideActive = 0;

// Add bullet points based on the number of slides, with the first point selected
let bulletPoints = document.querySelector(".dots");
let nombreImages = slides.length;

for (let i = 0; i < nombreImages; i++) {
  bulletPoints.innerHTML += `<span class="dot${
    i === 0 ? " dot_selected" : ""
  }"></span>`;
}

// Function to update the active slide
function updateSlide() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === slideActive);
  });
  bannerImg.src = `./assets/images/slideshow/${slides[slideActive].image}`;
  bannerTagline.innerHTML = `${slides[slideActive].tagLine}`;
}

//Fonction to scroll to the right
function defilementDroit() {
  flechedroite.addEventListener("click", function () {
    if (slideActive < slides.length - 1) {
      slideActive++;
    } else {
      slideActive = 0;
    }
    updateSlide();
    return slideActive;
  });
}

//Fonction to scroll to the left
function defilementGauche() {
  flechegauche.addEventListener("click", function () {
    if (slideActive > 0) {
      slideActive--;
    } else {
      slideActive = slides.length - 1;
    }
    updateSlide();
    return slideActive;
  });
}

// Main function
function slider() {
  defilementDroit();
  defilementGauche();
}
