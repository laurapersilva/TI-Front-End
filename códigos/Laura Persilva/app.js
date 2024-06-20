function lerComentarios (){
    //le os comentarios que foram inseridos
    let strComent = localStorage.getItem('info');  //parte string dos dados
    let objComent = {} //parte objeto json dos dados 

    //se houver dados, pegar a string e converter para objeto json
    if(strComent){
        objComent = JSON.parse (strComent);
    }
    else{
        objComent = { comentarios: [
            {id: "", comentario:""}
        ]
        }
    }
    
    return objComent;
}

function salvaComentarios (comentario){
    localStorage.setItem ('info', JSON.stringify (comentario));

}

function incluirComentario (){
    //ler os comentarios do local storage
    let objComent = lerComent();

    //inclui novo comentario
    let strComentario = document.getElementById('comentario').value;
    
    //salva novo comentario no local storage
    salvaDados(objDados);
}
