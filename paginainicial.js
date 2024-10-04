document.addEventListener('DOMContentLoaded', function () {
    // Obtém o ícone do menu e o menu lateral
    const menuToggle = document.getElementById('menu-toggle');
    const menuLateral = document.querySelector('.menu-lateral');

    // Adiciona um evento de clique para expandir o menu
    menuToggle.addEventListener('click', function () {
        menuLateral.classList.toggle('active'); // Alterna a classe 'active'
    });
});