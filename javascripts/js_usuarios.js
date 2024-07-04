function lerDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {}

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            restaurantes: [],
            usuarios: [
                { nome: "Pessoa1", email: "emailteste1@gmail.com", telefone: "31999999999", senha: "123", confirmaSenha: "123", descricao: "lakljdflçkjaskdljflajdkfjaçjkd"},
                { nome: "Pessoa2", email: "emailteste2@gmail.com", telefone: "31999999999", senha: "123", confirmaSenha: "123", descricao: "lakljdflçkjaskdljflajdkfjaçjkd"}
            ]
        }
    }

    return objDados;
}

function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));

}

function incluirUsuarios() {
    // ler os dados do local storage
    let objDados = lerDados();

    // inclui novo contato
    let strNome = document.getElementById('nome').value;
    let strEmail = document.getElementById('email').value;
    let strTelefone = document.getElementById('telefone').value; // Adicionado para telefone
    let strPassword = document.getElementById('password').value;
    let strPassword2 = document.getElementById('confirma_password').value;
    let strDescricao = document.getElementById('descricao').value;
    let novoUsuario = {
        nome: strNome,
        email: strEmail,
        telefone: strTelefone, // Adicionado para telefone
        senha: strPassword,
        confirmaSenha: strPassword2,
        descricao: strDescricao // Adicionado para descrição
    };

    objDados.usuarios.push(novoUsuario);

    // salva novo contato no local storage
    salvaDados(objDados);
}

document.getElementById('Registrar').addEventListener('click', incluirUsuarios);