const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		image: "slide2.jpg",
		tagLine:
			"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
];


//Récupération des flèches et de la bannière sur le DOM
const flechegauche = document.querySelector(".arrow_left");
const flechedroite = document.querySelector(".arrow_right");
const bannerTagline = document.querySelector(".banner-tagline");
const bannerImg = document.querySelector(".banner-img");

//Déclaration des variables
let slideActive = 0;

//Ajout des bullet points en fonction du nombre de slides, avec le premier point sélectionné
let bulletPoints = document.querySelector(".dots");
let nombreImages = slides.length;

for (let i = 0; i < nombreImages; i++) {
	if (i === 0) {
		bulletPoints.innerHTML += `<span class="dot dot_selected"></span>`;
	} else {
		bulletPoints.innerHTML += `<span class="dot"></span>`;
	}
}

// Fonction pour mettre à jour la slide active
function updateSlide() {
	const dots = document.querySelectorAll(".dot");
	dots.forEach((dot, index) => {
		if (index === slideActive) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
	bannerImg.src = `./assets/images/slideshow/${slides[slideActive].image}`;
	bannerTagline.innerHTML = `${slides[slideActive].tagLine}`;
}

//Fonction pour défiler vers la droite
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

//Fonction pour défiler vers la gauche
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

//Fonction maitresse
function slider() {
	defilementDroit();
	defilementGauche();
}

// Appel de la fonction maitresse "slider"
slider();
