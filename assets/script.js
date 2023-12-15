// Retrieve arrows and banner elements from the DOM
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const bannerTagline = document.querySelector(".banner-tagline");
const bannerImg = document.querySelector(".banner-img");

// Declare variables
let activeSlide = 0;

// Add bullet points based on the number of slides, with the first point selected
const bulletPoints = document.querySelector(".dots");
const numberOfImages = slides.length;
let bulletPointsHTML = "";

for (let i = 0; i < numberOfImages; i++) {
  bulletPointsHTML += `<span class="dot`;
  if (i === 0) {
    bulletPointsHTML += " dot_selected";
  }
  bulletPointsHTML += `"></span>`;
}

// I that you can refactor the code above using the following line, but I don't understand it, so I'll leave it as is for now
// bulletPointsHTML = Array.from({ length: numberOfImages }, (_, i) => `<span class="dot${i === 0 ? " dot_selected" : ""}"></span>`).join("");



bulletPoints.innerHTML = bulletPointsHTML;

// Function to update the active slide
function updateSlide() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === activeSlide);
  });
  bannerImg.src = `./assets/images/slideshow/${slides[activeSlide].image}`;
  bannerTagline.innerHTML = `${slides[activeSlide].tagLine}`;
}

// Event listeners for arrows
rightArrow.addEventListener("click", () => nextSlide(1));
leftArrow.addEventListener("click", () => nextSlide(-1)); // I tried to call nextSlide with 0 as argument, but it didn't work, so I figured I'd just use -1 instead

// Function to change the slide based on the arrow clicked
function nextSlide(arrowDirection) {
  activeSlide = (activeSlide + arrowDirection + slides.length) % slides.length; // I found this formula on StackOverflow, it's a bit over my head but it works
  updateSlide();
}

///// pre-factored code /////

// let sensFleche = 0;

// // Add bullet points based on the number of slides, with the first point selected
// let bulletPoints = document.querySelector(".dots");
// let nombreImages = slides.length;

// for (let i = 0; i < nombreImages; i++) {
//   bulletPoints.innerHTML += `<span class="dot${
//     i === 0 ? " dot_selected" : ""
//   }"></span>`;
// }

// // Function to update the active slide
// function updateSlide() {
//   const dots = document.querySelectorAll(".dot");
//   dots.forEach((dot, index) => {
//     dot.classList.toggle("dot_selected", index === slideActive);
//   });
//   bannerImg.src = `./assets/images/slideshow/${slides[slideActive].image}`;
//   bannerTagline.innerHTML = `${slides[slideActive].tagLine}`;
// }

// // Function to change the slide based on the arrow clicked
// function nextSlide(sensFleche) {
//   if (sensFleche === 1) {
//     if (slideActive < slides.length - 1) {
//       slideActive++;
//     } else {
//       slideActive = 0;
//     }
//   } else {
//     if (slideActive > 0) {
//       slideActive--;
//     } else {
//       slideActive = slides.length - 1;
//     }
//   }
//   updateSlide();
//   return slideActive;
// }

// // Event listeners for arrows
// flechedroite.addEventListener("click", function () {
//   sensFleche = 1;
//   nextSlide(sensFleche);
//   return slideActive;
// });

// flechegauche.addEventListener("click", function () {
//   sensFleche = 0;
//   nextSlide(sensFleche);
//   return slideActive;
// });
