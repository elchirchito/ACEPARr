function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Obtener el botón
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Mostrar el botón cuando el usuario se desplace hacia abajo
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Desplazarse suavemente hacia arriba cuando se hace clic en el botón
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Hacer el desplazamiento suave
    });
});
