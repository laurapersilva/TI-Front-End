document.getElementById('voltar').addEventListener('click', function() {
    window.history.back();
});

function lerDados() {
    let strDados = localStorage.getItem('db');
    let objDados;

    if (strDados) {
        try {
            objDados = JSON.parse(strDados);
        } catch (error) {
            console.error("Error parsing JSON: ", error);
            objDados = null;
        }
    }

    if (!objDados) {
        objDados = {
            restaurantes: [
                { src:"https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", preco: "R$10,00 - R$20", nome: "Yoku Taberu", email: "yokutaberu@gmail.com", telefone: "(31) 3344-5566", endereco: "Av. Contorno - 105", senha: "1234", confirmaSenha: "1234", tipoComida: "2", descricao: "Seja bem-vindo ao Yoku Taberu, um oásis de sabores japoneses autênticos no coração da cidade. Delicie-se com nossos sushis frescos preparados por chefs especializados, em um ambiente acolhedor e moderno. Descubra uma experiência gastronômica única, onde cada prato conta uma história de tradição e excelência.", horario: "Horários de funcionamento: 18:00hrs - 20:00hrs" },
                { src:"https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", preco: "R$10,00 - R$20", nome: "Butequim do Sabor", email: "butequimsabor@gmail.com", telefone: "(31) 3411-1234", endereco: "Rua Paraiba - 300", senha: "1234", confirmaSenha: "1234", tipoComida: "1", descricao: "O Butequim do Sabor é um refúgio gastronômico onde cada prato conta uma história de sabores autênticos. Com ambiente acolhedor e atendimento caloroso, é o lugar ideal para desfrutar de momentos deliciosos com amigos e família. Explore nossa variedade de petiscos e pratos principais que prometem satisfazer os paladares mais exigentes. Venha viver uma experiência única no Butequim do Sabor!", horario: "Horários de funcionamento: 18:00hrs - 20:00hrs" },
                { src:"https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", preco: "R$10,00 - R$20", nome: "El Ranchito Mexicano", email: "elranchito_contato@gmail.com", telefone: "(31) 3214-4321", endereco: "Rua Sergipe - 289", senha: "1234", confirmaSenha: "1234", tipoComida: "4", descricao: "O El Ranchito Mexicano é um pedacinho do México aqui perto, onde os aromas e sabores tradicionais encantam a cada visita. Em um ambiente vibrante e acolhedor, nosso restaurante oferece uma autêntica experiência gastronômica mexicana, com pratos que destacam os ingredientes frescos e temperos marcantes. Venha saborear nossas deliciosas tacos, enchiladas e guacamole feitos com amor e tradição. Estamos ansiosos para recebê-lo no El Ranchito Mexicano!", horario: "Horários de funcionamento: 18:00hrs - 20:00hrs" },
                { src:"https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", preco: "R$10,00 - R$20", nome: "Imperial Garden", email: "imperial_contato@gmail.com", telefone: "(31) 3422-1234", endereco: "Rua da Rosa - 290", senha: "1234", confirmaSenha: "1234", tipoComida: "3", descricao: "O Imperial Garden oferece uma jornada culinária autêntica através dos sabores da China, onde cada prato é uma celebração da rica cultura gastronômica do país. Em um ambiente elegante e acolhedor, nosso restaurante convida você a explorar uma variedade de pratos exquisitamente preparados, desde dim sum delicadamente feito até pratos principais aromáticos. Descubra o encanto e a sofisticação do Oriente no Imperial Garden, onde cada visita promete uma experiência gastronômica memorável e satisfatória.", horario: "Horários de funcionamento: 18:00hrs - 20:00hrs" },
                { src:"https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", preco: "R$10,00 - R$20", nome: "Trem Bão, sô!", email: "trembao@gmail.com", telefone: "(31) 3433-1334", endereco: "Av. Barbacena - 34", senha: "1234", confirmaSenha: "1234", tipoComida: "6", descricao: "Trem Bão, sô! é um restaurante acolhedor que celebra os sabores autênticos da comida mineira com um toque caseiro irresistível. No coração da cidade, nossa casa oferece um ambiente familiar e pratos tradicionais que vão aquecer seu coração e satisfazer seu apetite. Venha saborear nossas delícias típicas, preparadas com carinho e ingredientes frescos, para uma experiência gastronômica única e memorável.", horario: "Horários de funcionamento: 18:00hrs - 20:00hrs" }
            ],
            usuarios: []
        };
    }

    return objDados;
}

function filtraRestaurantes(filtro) {
    let obj = lerDados();
    let restaurantes = document.getElementById('rest');
    let str = "";
    console.log(filtro)
    filtro = filtro.toLowerCase();

    obj.restaurantes.forEach(restaurante => {
        if (restaurante.nome.toLowerCase().includes(filtro) || filtro === "") {
            str += `<div class="restaurant">
            <img src="${restaurante.src}" alt="${restaurante.nome}">
            <h2><a href="info.html?nome=${encodeURIComponent(restaurante.nome)}">${restaurante.nome}</a></h2>
            <div class="price">${restaurante.preco}</div>
            <div class="endereco">Localização: ${restaurante.endereco}</div>
        </div>`;
        }
    });

    restaurantes.innerHTML = str;
}
function pegaTipo(num){
    let frase = "";
    if(num == 1){
        frase = "Buteco";
    } else if( num == 2){
        frase = "Japonesa";
    } else if( num == 3){
        frase = "Chinesa";
    } else if( num == 4){
        frase = "Mexicana";
    }else if( num == 5){
        frase = "Outros internacional";
    } else if( num == 6){
        frase = "Mineira";
    } else {
        frase = "Outros";
    
    }
}


function mostraRestaurantes() {
    let obj = lerDados();
    console.log(obj);
    localStorage.setItem('db', JSON.stringify(obj)); // Converte obj para string antes de armazenar no localStorage
    let str = "";
    let restaurantesElement = document.getElementById('rest');

    obj.restaurantes.forEach(restaurante => {
        str += `<div class="restaurant">
            <img src="${restaurante.src}" alt="${restaurante.nome}">
            <h2><a href="info.html?nome=${encodeURIComponent(restaurante.nome)}">${restaurante.nome}</a></h2>
            <div class="price">${restaurante.preco}</div>
            <div class="endereco">Localização: ${restaurante.endereco}</div>
        </div>`;

    });

    restaurantesElement.innerHTML = str;
}

// Chame mostraRestaurantes() para inicializar a lista de restaurantes ao carregar a página
document.addEventListener('DOMContentLoaded', mostraRestaurantes);

// Adicionar listener para o campo de filtro
document.getElementById('filtra').addEventListener('input', function() {
    let filtro = this.value.toLowerCase().trim(); // Remove espaços em branco do início e do fim
    filtraRestaurantes(filtro);
});

// Função para limpar o campo de filtro e mostrar todos os restaurantes
function limparFiltro() {
    document.getElementById('filtra').value = '';
    filtraRestaurantes('');
}



function mostraDados(){
    let dados = document.getElementById('dados')
    // Obter a string de consulta da URL
    const queryString = window.location.search;

    // Criar um objeto URLSearchParams com a string de consulta
    const urlParams = new URLSearchParams(queryString);

    // Obter o valor do parâmetro 'nome' da URL
    const nomeRestaurante = urlParams.get('nome');

    // Decodificar o valor do parâmetro 'nome' (se necessário)
    const nomeDecodificado = decodeURIComponent(nomeRestaurante);
    console.log(nomeDecodificado)

    let obj = lerDados();
    let str = "";

    obj.restaurantes.forEach(restaurante => {
        console.log(nomeDecodificado +  " " + restaurante.nome)
        if (restaurante.nome === nomeDecodificado) {
            str += `
            <h1>${restaurante.nome}</h1>
            <div class="content-wrapper">
            <div class="text-content">
                        <p>${restaurante.tipoComida}</p>
                        <p>${restaurante.endereco}</p>
                        <p>${restaurante.telefone}</p>
                        <p>${restaurante.horario}</p>
                    </div>
                    <div class="image-content">
                        <img src="${restaurante.src}" alt="Prato do restaurante">
                    </div> </div>`;
        }
    });

    dados.innerHTML = str

}