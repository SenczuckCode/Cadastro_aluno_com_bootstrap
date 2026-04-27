
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("form-cadastro").onsubmit = (e) => {
        e.preventDefault();
        let nome = document.getElementById("nome").value;
        let cpf = document.getElementById("cpf").value;
        let dataNascimento = document.getElementById("dataNascimento").value;
        let telefone = document.getElementById("telefone").value;
        let email = document.getElementById("email").value;
        let endereco = document.getElementById("endereco").value;
        let cidade = document.getElementById("cidade").value;
        let cep = document.getElementById("cep").value;
        let curso = document.getElementById("curso").value;
        let matricula = document.getElementById("matricula").value;
        let senha = document.getElementById("senha").value;
        let senhaConfirmacao = document.getElementById("senha_confirmacao").value;
        let mensagem = document.getElementById("mensagem");
        mensagem.innerHTML = "";
        if (nome.length < 3) {
            mensagem.innerHTML = "<div class='alert alert-danger'>Nome muito curto</div>";
            return;
        }
        if (cpf.length < 11) {
            mensagem.innerHTML = "<div class='alert alert-danger'>CPF inválido</div>";
            return;
        }
        if (!dataNascimento) {
            mensagem.innerHTML = "<div class='alert alert-danger'>Informe a data de nascimento</div>";
            return;
        }
        if (telefone.length < 8) {
            mensagem.innerHTML = "<div class='alert alert-danger'>Telefone inválido</div>";
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            mensagem.innerHTML = "<div class='alert alert-danger'>Email inválido</div>";
            return;
        }
        if (endereco.length < 5) {
            mensagem.innerHTML = "<div class='alert alert-danger'>Endereço inválido</div>";
            return;
        }
        if (cidade.length < 2) {
            mensagem.innerHTML = "<div class='alert alert-danger'>Cidade inválida</div>";
            return;
        }
        if (cep.length < 8) {
            mensagem.innerHTML = "<div class='alert alert-danger'>CEP inválido</div>";
            return;
        }
        if (curso.length < 3) {
            mensagem.innerHTML = "<div class='alert alert-danger'>Curso inválido</div>";
            return;
        }
        if (matricula.length < 3) {
            mensagem.innerHTML = "<div class='alert alert-danger'>Matrícula inválida</div>";
            return;
        }
        if (senha.length < 4) {
            mensagem.innerHTML = "<div class='alert alert-danger'>Senha muito curta</div>";
            return;
        }
        if (senha !== senhaConfirmacao) {
            mensagem.innerHTML = "<div class='alert alert-danger'>As senhas não coincidem</div>";
            return;
        }
        mensagem.innerHTML = "<div class='alert alert-success'>Cadastro realizado com sucesso!</div>";
        document.getElementById("form-cadastro").reset();
    };
});
