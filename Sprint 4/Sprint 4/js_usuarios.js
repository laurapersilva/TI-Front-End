
function lerDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {}

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            restaurantes: [
                { nome: "Pessoa1", email: "emailteste1@gmail.com", telefone: "31999999999", senha: "123", confirmaSenha: "123"},
                { nome: "Pessoa2", email: "emailteste2@gmail.com", telefone: "31999999999", senha: "123", confirmaSenha: "123"}
            ]
        }
    }

    return objDados;
}

function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));

}

function incluirRestaurante() {
    //ler os dados do local storage
    let objDados = lerDados();

    //inclui novo contato
    let strNome = document.getElementById('nome').value;
    let strEmail = document.getElementById('email').value;
    let strPassword = document.getElementById('password').value;
    let strPassword2 = document.getElementById('confirma_password').value;
    

    let novoRestaurante = {
        nome: strNome,
        email: strEmail,
        senha: strPassword,
        confimaSenha: strPassword2
    };

    objDados.restaurantes.push(novoRestaurante);

    //salva novo contato no local storage
    salvaDados(objDados);
}

document.getElementById('Registrar').addEventListener('click', incluirRestaurante);