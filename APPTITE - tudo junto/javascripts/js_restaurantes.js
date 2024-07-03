
function lerDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {}

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            restaurantes: [
                { nome: "Yoku Taberu", email: "yokutaberu@gmail.com", telefone: " (31) 3344-5566", endereco: "Av. Contorno - 105", senha: "1234", confirmaSenha: "1234", tipoComida: "2", descricao: "Seja bem-vindo ao Yoku Taberu, um oásis de sabores japoneses autênticos no coração da cidade. Delicie-se com nossos sushis frescos preparados por chefs especializados, em um ambiente acolhedor e moderno. Descubra uma experiência gastronômica única, onde cada prato conta uma história de tradição e excelência." },

                { nome: "Butequim do Sabor", email: "butequimsabor@gmail.com", telefone: "(31) 3411-1234", endereco: "Rua Paraiba - 300", senha: "1234", confirmaSenha: "1234", tipoComida: "1", descricao: "O Butequim do Sabor é um refúgio gastronômico onde cada prato conta uma história de sabores autênticos. Com ambiente acolhedor e atendimento caloroso, é o lugar ideal para desfrutar de momentos deliciosos com amigos e família. Explore nossa variedade de petiscos e pratos principais que prometem satisfazer os paladares mais exigentes. Venha viver uma experiência única no Butequim do Sabor!" },

                { nome: "El Ranchito Mexicano", email: "elranchito_contato@gmail.com", telefone: "(31) 3214-4321", endereco: "Rua Sergipe - 289", senha: "1234", confirmaSenha: "1234", tipoComida: "4", descricao: "O El Ranchito Mexicano é um pedacinho do México aqui perto, onde os aromas e sabores tradicionais encantam a cada visita. Em um ambiente vibrante e acolhedor, nosso restaurante oferece uma autêntica experiência gastronômica mexicana, com pratos que destacam os ingredientes frescos e temperos marcantes. Venha saborear nossas deliciosas tacos, enchiladas e guacamole feitos com amor e tradição. Estamos ansiosos para recebê-lo no El Ranchito Mexicano!" },

                { nome: "Imperial Garden", email: "imperial_contato@gmail.com", telefone: "(31) 3422-1234", endereco: "Rua da Rosa - 290", senha: "1234", confirmaSenha: "1234", tipoComida: "3", descricao: "O Imperial Garden oferece uma jornada culinária autêntica através dos sabores da China, onde cada prato é uma celebração da rica cultura gastronômica do país. Em um ambiente elegante e acolhedor, nosso restaurante convida você a explorar uma variedade de pratos exquisitamente preparados, desde dim sum delicadamente feito até pratos principais aromáticos. Descubra o encanto e a sofisticação do Oriente no Imperial Garden, onde cada visita promete uma experiência gastronômica memorável e satisfatória." },

                { nome: "Trem Bão, sô!", email: "trembao@gmail.com", telefone: "(31) 3433-1334", endereco: "Av. Barbacena - 34", senha: "1234", confirmaSenha: "1234", tipoComida: "6", descricao: "Trem Bão, sô! é um restaurante acolhedor que celebra os sabores autênticos da comida mineira com um toque caseiro irresistível. No coração da cidade, nossa casa oferece um ambiente familiar e pratos tradicionais que vão aquecer seu coração e satisfazer seu apetite. Venha saborear nossas delícias típicas, preparadas com carinho e ingredientes frescos, para uma experiência gastronômica única e memorável." }
            ],
            usuarios: []
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