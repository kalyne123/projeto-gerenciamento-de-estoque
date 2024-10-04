document.addEventListener('DOMContentLoaded', function () {
    const menuLateral = document.getElementById('menu-lateral'); // Obtém o menu pelo ID
    const menuItems = document.querySelectorAll('.navigation ul li a');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            menuLateral.classList.toggle('active'); // Alterna a classe 'active' no menu lateral
        });
    });
});