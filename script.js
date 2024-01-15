document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez les éléments nécessaires du DOM
    var menuToggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('header nav');

    // Ajoutez un écouteur d'événements au bouton de bascule du menu
    menuToggle.addEventListener('click', function () {
        // Basculez la classe 'active' pour afficher ou masquer le menu
        nav.classList.toggle('active');
    });

    // Ajoutez un écouteur d'événements pour masquer le menu lors du clic sur un lien du menu
    nav.addEventListener('click', function (event) {
        // Si le menu est ouvert et un lien est cliqué, fermez le menu
        if (nav.classList.contains('active') && event.target.tagName === 'A') {
            nav.classList.remove('active');
        }
    });
});
