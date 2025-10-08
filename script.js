// Confetti Effect
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
let confettiParticles = [];
const confettiColors = ['#ff99cc', '#ff66b2', '#ffb6c1', '#ff80bf', '#ffcce0'];

function createConfetti() {
    confettiParticles = Array.from({ length: 200 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 5 + 2,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        speed: Math.random() * 2 + 1,
        drift: (Math.random() - 0.5) * 2
    }));
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createConfetti();
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiParticles.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.fill();
        c.y += c.speed;
        c.x += c.drift;
        if (c.y > canvas.height) c.y = 0;
        if (c.x > canvas.width) c.x = 0;
        if (c.x < 0) c.x = canvas.width;
    });
    requestAnimationFrame(animateConfetti);
}
animateConfetti();

// Gallery toggling
const mainContent = document.querySelector('.main-content');
const artGallery = document.getElementById('artGallery');
const portraitGallery = document.getElementById('portraitGallery');

function showGallery(id) {
    mainContent.style.display = 'none';
    if (id === 'artGallery') {
        artGallery.classList.remove('hidden');
        portraitGallery.classList.add('hidden');
    } else if (id === 'portraitGallery') {
        portraitGallery.classList.remove('hidden');
        artGallery.classList.add('hidden');
    }
}

function backToMain() {
    artGallery.classList.add('hidden');
    portraitGallery.classList.add('hidden');
    mainContent.style.display = 'block';
}

// Scroll buttons for carousel
function scrollCarousel(carouselId, amount) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollBy({ left: amount, behavior: 'smooth' });
}

