
function leDadosPerfil(){
    let dados_perfil_apos = localStorage.getItem('dados_perfil');
    let dados_objeto = {};

    if(dados_perfil_apos){
        dados_objeto = JSON.parse(dados_perfil_apos);
    } else {
        dados_objeto = { post: []}
    }

    return dados_objeto;
}

function salvaDadosPost (dadosperfil){
    localStorage.setItem('dados_perfil', JSON.stringify (dadosperfil));
}

function incluiDadosPost (){
    let dados_objeto = leDadosPerfil();

    let nome = document.getElementById('nome').value;
    let bio = document.getElementById('bio').value;
    let img = document.getElementById('img').value;

    let novoPerfil = {
        nome,
        bio,
        img
    };

    dados_objeto.post.push (novoPerfil);

    salvaDadosPerfil(dados_objeto);
}
