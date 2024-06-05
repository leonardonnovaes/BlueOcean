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