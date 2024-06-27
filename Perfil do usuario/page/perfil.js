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
