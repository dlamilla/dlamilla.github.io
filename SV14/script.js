// --- Carrusel ---
const slides = document.querySelectorAll('.slide');
const finalScreen = document.querySelector('.final-screen');
const progress = document.getElementById('progress');
const music = document.getElementById('bgMusic');

let current = 0;
let musicStarted = false;

function startMusic() {
  if (!musicStarted) {
    music.play().catch(() => {});
    musicStarted = true;
  }
}

function updateProgress() {
  const total = slides.length;
  const percent = Math.min((current / total) * 100, 100);
  progress.style.width = percent + '%';
}

function showSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  finalScreen.classList.remove('active');

  if (index < slides.length) {
    slides[index].classList.add('active');
  } else {
    finalScreen.classList.add('active');
  }

  updateProgress();
}

function nextSlide(e) {
  e.stopPropagation();
  if (current < slides.length) current++;
  showSlide(current);
}

function prevSlide(e) {
  e.stopPropagation();
  if (current > 0) current--;
  showSlide(current);
}

function restart() {
  current = 0;
  showSlide(current);
}

updateProgress();

// --- Partículas (corazones) ---
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Heart {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + 20;
    this.size = Math.random() * 10 + 10;
    this.speed = Math.random() * 1 + 0.5;
  }

  draw() {
    ctx.font = this.size + "px Arial";
    ctx.fillText("💖", this.x, this.y);
  }

  update() {
    this.y -= this.speed;
    this.draw();
  }
}

const hearts = [];

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (Math.random() < 0.05) {
    hearts.push(new Heart());
  }

  hearts.forEach((h, i) => {
    h.update();
    if (h.y < -20) hearts.splice(i, 1);
  });

  requestAnimationFrame(animate);
}

animate();
// --- Intro cinematográfica ---

const intro = document.getElementById("intro-screen");
const startBtn = document.getElementById("startExperience");

startBtn.addEventListener("click", () => {
  music.play().catch(() => {});
  intro.classList.add("fade-out");

  setTimeout(() => {
    intro.style.display = "none";
  }, 800);
});
