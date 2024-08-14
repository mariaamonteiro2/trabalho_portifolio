// Função para validar o formulário de contato
function validateForm() {
    var name = document.getElementById("name").value; // Obtém o valor do campo 'nome'
    var email = document.getElementById("email").value; // Obtém o valor do campo 'email'
    var message = document.getElementById("message").value; // Obtém o valor do campo 'mensagem'

    // Verifica se todos os campos foram preenchidos
    if (name === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos.");
        return false; // Impede o envio do formulário
    }

    // Exibe uma mensagem de sucesso e permite o envio do formulário
    alert("Mensagem enviada com sucesso!");
    return true;
}