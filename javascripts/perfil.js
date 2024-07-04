

function toggleMenu() {
  var popupMenu = document.getElementById('popupMenu');
  if (popupMenu.style.display === 'block') {
    popupMenu.style.display = 'none';
  } else {
    popupMenu.style.display = 'block';
  }
}

function navigateTo(page) {
  window.location.href = page;
}

function toggleCriarPerfil() {
  var popupCriarpost = document.getElementById('popupCriarpost');
  var overlay = document.getElementById('overlay');
  if (popupCriarpost.style.display === 'block') {
    popupCriarpost.style.display = 'none';
    overlay.style.display = 'none';
  } else {
    popupCriarpost.style.display = 'block';
    overlay.style.display = 'block';
  }
}

function fazLogin() {
  // Obter valores dos campos de email e senha
  let campoEmail = document.getElementById('email');
  let email = campoEmail.value;
  let campoSenha = document.getElementById('password');
  let senha = campoSenha.value;

  // Obter dados do localStorage
  let db = localStorage.getItem('db');
  let dados = JSON.parse(db);

  // Verificar se encontrou um usuário com email e senha correspondentes
  let usuarioEncontrado = dados.usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

  if (usuarioEncontrado) {
      // Login bem-sucedido
      alert(`Login bem-sucedido! Bem-vindo, ${usuarioEncontrado.nome}!`);

      // Salvar informações de login no localStorage
      localStorage.setItem('usuarioLogado', JSON.stringify({
          id: usuarioEncontrado.id,
          nome: usuarioEncontrado.nome,
          tipo: usuarioEncontrado.tipo
      }));

      // Redirecionar o usuário para a página adequada
      if (usuarioEncontrado.tipo === 'usuario') {
          location.href = '../../apptite-final/pagina_perfil.html'; // Exemplo de redirecionamento para perfil de usuário comum
      } else if (usuarioEncontrado.tipo === 'restaurante') {
          location.href = '../pagina_perfil.html'; // Exemplo de redirecionamento para perfil de restaurante
      }
  } else {
      // Login falhou
      alert('Email ou senha incorretos. Por favor, tente novamente.');
  }
}




function mostraInfo(){
  // Obter dados do localStorage
  let db = localStorage.getItem('db');
  let userLogado = localStorage.getItem('usuarioLogado')
  userLogado = JSON.parse(userLogado)
  let name = userLogado.nome
  let dados = JSON.parse(db);

  // Verificar se encontrou um usuário com email e senha correspondentes
  let usuarioEncontrado = dados.usuarios.find(usuario => usuario.nome === name);

  console.log(usuarioEncontrado)

  let nomePessoa = document.getElementById('nomePessoa')
  nomePessoa.innerHTML = usuarioEncontrado.nome
  let descricao = document.getElementById('descricao')
  descricao.innerHTML = usuarioEncontrado.descricao
}

function lerDados() {
  let strDados = localStorage.getItem('db');
  let objDados = {}

  if (strDados) {
      objDados = JSON.parse(strDados);
  }
  else {
      objDados = {
          restaurantes: [],
          usuarios: [],
          post: [ {descricao:"", imagem:"", vibe: "", qualidade: "", estrelas: ""}
      ],
      }
  }

  return objDados;
}

function salvaDados(dados) {
  localStorage.setItem('db', JSON.stringify(dados));
}



function incluirPosts() {
  // ler os dados do local storage
  let objDados = lerDados();

  // incluir novo restaurante
  let strDescricao = document.getElementById('descricao').value;
  let strImagemURL = document.getElementById('url-imagem').value;
  let strVibe = document.getElementById('meuDdropdown').value;
  let strQualidade = document.getElementById('meuDdropdown2').value;
  let strEstrelas = document.getElementById('rating').value;

  let novoPost = {
      descricao: strDescricao,
      imagem: strImagemURL,
      vibe: strVibe,
      qualidade: strQualidade,
      estrelas: strEstrelas
  };

  objDados.post.push(novoPost);

  // salvar novo Post no local storage
  salvaDados(objDados);
}




document.getElementById('bntSalvaPost').addEventListener('click', incluirPosts);
