const carousel = document.getElementById('carousel');
const indicators = document.getElementById('carouselIndicators').children;
let currentIndex = 0;
const totalSlides = carousel.children.length;

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateCarousel();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

for (let i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener('click', () => {
        currentIndex = i;
        updateCarousel();
    });
}

// Função para atualizar o carrossel
function updateCarousel() {
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove('active');
    }
    indicators[currentIndex].classList.add('active');
}

// Adicionando a transição automática a cada 5 segundos
setInterval(() => {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateCarousel();
}, 5000); // 5000 milissegundos = 5 segundos
