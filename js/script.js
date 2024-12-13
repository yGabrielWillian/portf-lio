// Função de validação do formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert('Mensagem enviada com sucesso!');
        // Aqui, você pode adicionar lógica para enviar os dados para um servidor
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
