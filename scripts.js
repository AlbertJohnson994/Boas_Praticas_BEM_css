// Seleciona todos os produtos
const products = document.querySelectorAll('.product');

// Adiciona um evento de clique para cada produto
products.forEach(product => {
    product.addEventListener('click', () => {
        // Remove a classe 'product--highlighted' de outros produtos
        products.forEach(p => p.classList.remove('product--highlighted'));
        
        // Adiciona a classe 'product--highlighted' ao produto selecionado
        product.classList.add('product--highlighted');
    });
});
