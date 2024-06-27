
function lerDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {}

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            restaurantes: [
                { nome: "Restaurante1", email: "emailteste1@gmail.com", telefone: "31999999999", endereco: "rua 1", senha: "123", confirmaSenha: "123", tipoComida: "2", descricao: "testedesc" },
                { nome: "Restaurante2", email: "emailteste2@gmail.com", telefone: "31999999999", endereco: "rua 2", senha: "123", confirmaSenha: "123", tipoComida: "3", descricao: "testedesc2" }
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
    let strTelefone = document.getElementById('telefone').value;
    let strEmail = document.getElementById('email').value;
    let strEndereco = document.getElementById('endereco').value;
    let strPassword = document.getElementById('password').value;
    let strPassword2 = document.getElementById('confirma_password').value;
    let strComida = document.getElementById('comida').value;
    let strDescricao = document.getElementById('restaurant-description').value;




    let novoRestaurante = {
        nome: strNome,
        email: strEmail,
        telefone: strTelefone,
        endereco: strEndereco,
        senha: strPassword,
        confimaSenha: strPassword2,
        tipoComida: strComida,
        descricao: strDescricao

    };

    objDados.restaurantes.push(novoRestaurante);

    //salva novo contato no local storage
    salvaDados(objDados);
}

document.getElementById('Registrar').addEventListener('click', incluirRestaurante);