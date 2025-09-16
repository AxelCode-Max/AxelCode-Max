document.addEventListener('DOMContentLoaded', () => {
    // Código para agregar interactividad si es necesario.
    // Por ejemplo, para hacer un "scroll suave" en los enlaces de navegación.

    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log('¡El sitio web de Axel está listo!');
});