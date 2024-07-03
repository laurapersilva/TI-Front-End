let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;

    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentIndex);
    });
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

function currentSlide(index) {
    showSlide(index - 1);
}
showSlide(currentIndex);


function toggleLike() {
    const curtida = document.getElementById('curtida');
    curtida.classList.toggle('curtir');
}

function goToComments() {
    window.location.href = 'comentario';
}

function toggleSave() {
    const salvar = document.getElementById('salvar');
    salvar.classList.toggle('salvo');
}
