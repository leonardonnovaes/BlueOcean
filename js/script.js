
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});

function scrollToSection(id) {
    const section = document.getElementById(id);
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "url('./img/fundo2.jpg')",
        "url('./img/fundo3.webp    ')",
        "url('./img/fundo4.jpg')"
    ];

    let currentIndex = 0;
    const contatoSection = document.getElementById('contato');

    function changeBackground() {
        contatoSection.style.backgroundImage = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackground, 5000); // Muda a cada 5 segundos
});
function envioContato(event) {
    event.preventDefault();
    Swal.fire({
        title: "Formulário Enviado",
        text: "Agora só aguardar o recebimento no seu email",
        icon: "success"
      });
}
