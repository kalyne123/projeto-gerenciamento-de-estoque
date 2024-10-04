// Variável para armazenar a linha selecionada
let selectedRow = null;

// Função para selecionar uma linha da tabela
function selectRow(row) {
    // Se já existe uma linha selecionada, remove a classe 'selected' dela
    if (selectedRow) {
        selectedRow.classList.remove('selected');
    }

    // Adiciona a classe 'selected' à nova linha selecionada
    selectedRow = row;
    selectedRow.classList.add('selected');
}

// Função para remover a linha selecionada
function removeSelectedRow() {
    if (selectedRow) {
        // Pergunta ao usuário se ele realmente quer remover a linha
        const confirmDelete = confirm("Tem certeza que deseja remover este item?");
        if (confirmDelete) {
            // Remove a linha da tabela
            selectedRow.remove();
            // Limpa a seleção
            selectedRow = null;
        }
    } else {
        alert("Por favor, selecione uma linha para remover.");
    }
}

// Função para alternar a classe do menu lateral
function toggleMenu() {
    const menuLateral = document.querySelector('.menu-lateral');
    menuLateral.classList.toggle('active'); // Adiciona ou remove a classe 'active'
}

// Adiciona os ouvintes de eventos para os botões
document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach(row => {
        row.addEventListener("click", () => selectRow(row));
    });

    const removeButton = document.querySelector(".remove-button");
    removeButton.addEventListener("click", removeSelectedRow);

    // Adiciona evento ao ícone de menu para abrir/fechar
    const menuIcon = document.querySelector('.lateral .icon');
    menuIcon.addEventListener("click", toggleMenu);
});