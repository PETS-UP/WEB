const inputSenha = document.getElementById("input-senha");
const inputConfirmacaoSenha = document.getElementById("input-confirmacao-senha");

function mostrarSenha() {
    if (document.getElementById("input-mostrar-senha").checked) {
        inputSenha.type = "text";
        inputConfirmacaoSenha.type = "text";
    } else {
        inputSenha.type = "password";
        inputConfirmacaoSenha.type = "password";
    }
}