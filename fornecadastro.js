// Seleciona o menu lateral e todos os itens de menu (links)
const lateralMenu = document.querySelector('.lateral');
const menuItems = document.querySelectorAll('.list');

// Função para alternar a classe 'active' no menu lateral
function toggleMenu() {
    lateralMenu.classList.toggle('active');
}

// Adiciona evento de clique a cada item do menu
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        toggleMenu(); // Alterna a classe toda vez que qualquer item for clicado
    });
});