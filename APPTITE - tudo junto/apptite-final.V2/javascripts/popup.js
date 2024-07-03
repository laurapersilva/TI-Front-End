function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    dropdown.classList.toggle("show");
}

// Fechar os dropdowns se o usuário clicar fora deles
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function setRating(rating) {
    document.getElementById('selected-rating').textContent = rating;
}

function leDadosPost(){
    let dados_post_apos = localStorage.getItem('dados_post');
    let dados_objeto = {};

    if(dados_post_apos){
        dados_objeto = JSON.parse(dados_post_apos);
    } else {
        dados_objeto = { post: []}
    }

    return dados_objeto;
}

function salvaDadosPost (dados){
    localStorage.setItem('dados_post', JSON.stringify (dados));
}

function incluiDadosPost (){
    let dados_objeto = leDadosPost();

    let descricao = document.getElementById('descricao').value;

    let novoPost = {
        descricao
    };

    dados_objeto.post.push (novoPost);

    salvaDadosPost(dados_objeto);
}

function alert (){
    alert ('Post salvo!');
}

// BOTOES
document.getElementById (bntSalvaPost).addEventListener ('click', incluiDadosPost);

document.getElementById (bntSalvaPost).addEventListener ('click', alert);