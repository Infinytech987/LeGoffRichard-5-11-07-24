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

console.log(slides);

const arrow_left = document.querySelector(".arrow_left");

const arrow_right = document.querySelector(".arrow_right");

const img = document.querySelector("banner-img");

console.log(arrow_left, arrow_right);
console.log(img);

arrow_left.addEventListener("click", function () {
  alert("Bouton cliqué !");
});
arrow_right.addEventListener("click", function () {
  alert("Bouton cliqué !");
});
