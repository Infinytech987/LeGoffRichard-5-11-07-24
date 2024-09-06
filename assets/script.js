// Tableau des slides
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
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

// Variables pour suivre l'état du slider
let currentIndex = 0;

// Sélection des éléments
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const img = document.querySelector(".banner-img");
const tagline = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots"); // Conteneur des dots

// Fonction pour mettre à jour l'image, le texte et les dots
function updateSlide(index) {
  const slide = slides[index];
  img.src = `./assets/images/slideshow/${slide.image}`; // Mise à jour de l'image
  tagline.innerHTML = slide.tagLine; // Mise à jour du texte
  updateDots(index); // Mise à jour des dots
}

// Fonction pour générer les "dots" dynamiquement
function createDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === currentIndex) {
      dot.classList.add("active"); // Activer le premier dot initialement
    }
    dot.addEventListener("click", function () {
      currentIndex = index; // Mettre à jour l'index sur clic
      updateSlide(currentIndex); // Mettre à jour la slide sur clic
    });
    dotsContainer.appendChild(dot); // Ajouter le dot dans le conteneur
  });
}

// Fonction pour mettre à jour les "dots" actifs
function updateDots(activeIndex) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === activeIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Gestion des clics sur les flèches gauche et droite
arrow_left.addEventListener("click", function () {
  currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
  updateSlide(currentIndex);
});

arrow_right.addEventListener("click", function () {
  currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  updateSlide(currentIndex);
});

// Initialisation du slider
createDots(); // Créer les dots dynamiquement
updateSlide(currentIndex); // Mettre à jour la première slide
