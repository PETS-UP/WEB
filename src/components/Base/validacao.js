const regexSenha = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const regexTelefone = /^\((?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;

function validarCadastroInicial() {
    validarNome();
    validarEmail();
    validarSenha();
    validarConfirmacaoSenha();
}

function validarCadastroClienteCompleto() {
    validarTelefone();
    validarCpf();
    validarCep();
    validarNumeroEndereco();
}

function validarCadastroPetshopCompleto() {
    validarRazaoSocial();
    validarTelefone();
    validarCnpj();
    validarCep();
    validarNumeroEndereco();
}

function validarLogin() {
    validarEmail();
    validarSenha();
}

function validarNome(nome) {
    nome = String(document.getElementById("input-nome").value).trim();
    divFraseNome = document.getElementById("frase-nome");
    if (nome.length < 4) {
        divFraseNome.innerHTML = "Digite um nome com um mínimo de 4 letras.";
    } else {
        divFraseNome.innerHTML = "✓";
    }
}

function validarRazaoSocial(razaoSocial) {
    razaoSocial = String(document.getElementById("input-razao-social").value).trim();
    divFraseRazaoSocial = document.getElementById("frase-razao-social");
    if (razaoSocial.length < 12) {
        divFraseRazaoSocial.innerHTML = "Digite uma razão social com um mínimo de 12 caracteres."
    } else {
        divFraseRazaoSocial.innerHTML = "✓";
    }
}

function validarEmail(email) {
    email = String(document.getElementById("input-email").value).trim();
    divFraseEmail = document.getElementById("frase-email");
    if (email.length < 8) {
        divFraseEmail.innerHTML = "Digite um e-mail válido.";
    } else if (!email.indexOf("@")) {
        divFraseEmail.innerHTML = "Está faltando um @ em seu e-mail.";
    } else if (!(email.endsWith(".com")) && !(email.endsWith(".com.br")) && !(email.endsWith(".school")) && !(email.endsWith(".org"))) {
        divFraseEmail.innerHTML = "Não se esqueça da terminação de seu e-mail (.com)";
    } else {
        divFraseEmail.innerHTML = "✓";
    }
}

function validarTelefone(telefone) {
    telefone = String(document.getElementById("input-telefone").value).trim();
    divFraseTelefone = document.getElementById("frase-telefone");
    if (!regexTelefone.exec(telefone)) {
        divFraseTelefone.innerHTML = "Digite um telefone/celular com DDD.";
    } else {
        divFraseTelefone.innerHTML = "✓";
    }
}

function validarCpf(cpf) {
    cpf = String(document.getElementById("input-cpf").value).trim();
    divFraseCpf = document.getElementById("frase-cpf");
    if (cpf.length != 11) {
        divFraseCpf.innerHTML = "Digite um CPF válido (11 dígitos).";
    } else {
        divFraseCpf.innerHTML = "✓";
    }
}

function validarCnpj(cnpj) {
    cnpj = String(document.getElementById("input-cnpj").value).trim();
    divFraseCnpj = document.getElementById("frase-cnpj");
    if (cnpj.length != 14) {
        divFraseCnpj.innerHTML = "Digite um CPNJ válido (14 dígitos).";
    } else {
        divFraseCnpj.innerHTML = "✓";
    }
}

function validarCep(cep) {
    cep = String(document.getElementById("input-cep").value).trim();
    divFraseCep = document.getElementById("frase-cep");
    if (cep.length != 8) {
        divFraseCep.innerHTML = "Digite um CEP válido (8 dígitos).";
    } else {
        divFraseCep.innerHTML = "✓";
    }
}

function validarNumeroEndereco(numeroEndereco) {
    numeroEndereco = Number(document.getElementById("input-numero-endereco").value);
    divFraseNumeroEndereco = document.getElementById("frase-numero-endereco");
    if (numeroEndereco.toString().length < 0) {
        divFraseNumeroEndereco.innerHTML = "Digite um número de endereço.";
    } else if (numeroEndereco.toString().length > 6) {
        divFraseNumeroEndereco.innerHTML = "Digite um endereço válido (menos de 7 dígitos).";
    } else {
        divFraseNumeroEndereco.innerHTML = "✓";
    }
}

function validarSenha(senha) {
    senha = String(document.getElementById("input-senha").value);
    divFraseSenha = document.getElementById("frase-senha");
    if (senha.length < 8) {
        divFraseSenha.innerHTML = "Sua senha deve ter no mínimo 8 caracteres, um número e um caractere especial.";
    } else if (!regexSenha.exec(senha)) {
        divFraseSenha.innerHTML = "Lembre-se de utilizar um número e um caractere especial.";
    } else {
        divFraseSenha.innerHTML = "✓";
        validarConfirmacaoSenha(senha);
    }
}

function validarConfirmacaoSenha(senha, confirmacaoSenha) {
    senha = senha;
    confirmacaoSenha = String(document.getElementById("input-confirmacao-senha").value);
    divFraseConfirmacaoSenha = document.getElementById("frase-confirmacao-senha");
    if (confirmacaoSenha.length == 0) {
        divFraseConfirmacaoSenha.innerHTML = "Repita sua senha.";
    } else if (confirmacaoSenha !== senha) {
        divFraseConfirmacaoSenha.innerHTML = "As senhas são diferentes.";
    } else {
        divFraseConfirmacaoSenha.innerHTML = "✓";
    }
}

export {
    validarCadastroClienteCompleto, validarCadastroInicial, validarCadastroPetshopCompleto, 
    validarCep, validarCnpj, validarConfirmacaoSenha, validarCpf, validarEmail, validarLogin, 
    validarNome, validarNumeroEndereco, validarRazaoSocial, validarSenha, validarTelefone, 
    };