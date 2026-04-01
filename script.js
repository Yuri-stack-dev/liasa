let current = 0;
const slides = document.querySelectorAll(".slide");

function start() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("slideshow").style.display = "block";

  const music = document.getElementById("bgMusic");
  music.volume = 0.3;
  music.play();

  showSlide();
  autoSlide();
  setInterval(createHeart, 300);
}

function showSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[current].classList.add("active");
}

function autoSlide() {
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide();
  }, 4000); // change every 4 seconds
}

/* 💖 Hearts */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

function start() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("slideshow").style.display = "block";

  const music = document.getElementById("bgMusic");
  music.volume = 0.3;

  music.play().then(() => {
    console.log("Music started");
  }).catch(err => {
    console.log("Autoplay blocked:", err);
  });

  showSlide();
  autoSlide();
  setInterval(createHeart, 300);
}

