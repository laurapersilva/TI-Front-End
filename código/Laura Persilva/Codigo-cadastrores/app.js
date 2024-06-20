function lerDados (){
    //le os dados que foram inseridos
    let strDados = localStorage.getItem('info');  //parte string dos dados
    let objDados = {} //parte objeto json dos dados 

    //se houver dados, pegar a string e converter para objeto json
    if(strDados){
        objDados = JSON.parse (strDados);
    }
    else{
        objDados = { restaurantes: [
            {nome: "", email: "", telefone: "", endereco: "", senha:"", confirmaSenha:"", imagem: "", descricao:""}
        ]
        }
    }
    
    return objDados;
}

function salvaDados (dados){
    localStorage.setItem ('info', JSON.stringify (dados));

}

function incluirRestaurante (){
    //ler os dados do local storage
    let objDados = lerDados();

    //inclui novo contato
    let strNome = document.getElementById('nome').value;
    let strTelefone = document.getElementById('telefone').value;
    let strEmail = document.getElementById('email').value;
    let strEndereco = document.getElementById('endereco').value;
    let strPassword = document.getElementById('password').value;
    let strPassword2 = document.getElementById('confirma_password').value;
    let strDescricao = document.getElementById('descricao').value;

    
    //leitor de imagens
    let imagemEnviada = inputArquivo.files[0];
    leitorDeArquivos.readAsDataURL(imagemEnviada);

     //Após leitura da imagem (evento load), a função de callback define o valor do src da imagem de prévia com o valor do resultado da leitura do leitor de arquivos
    
     leitorDeArquivos.addEventListener('loadend', 
        function(load){
            //veja no console o que o resultado do leitor de arquivos :)
            console.log(load.target.result);
            //define o caminho da imagem com o caminho criado pelo leitor de arquivos
            previaDaImagem.src = load.target.result
        }
    )

    let novoRestaurante = {
        nome: strNome,
        email: strEmail,
        telefone: strTelefone,
        endereco: strEndereco,
        senha: strPassword,
        confimaSenha: strPassword2,
        descricao: strDescricao,
        imagem: imagemEnviada

    };

    objDados.restaurantes.push (novoRestaurante);

    //salva novo contato no local storage
    salvaDados(objDados);
}