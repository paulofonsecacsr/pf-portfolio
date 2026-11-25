const todosOsLinks = document.querySelectorAll('a');

todosOsLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        const confirmacao = confirm("Você está prestes a sair do portfólio. Deseja continuar?");
        if (!confirmacao) {
            event.preventDefault();
        }
    });
});