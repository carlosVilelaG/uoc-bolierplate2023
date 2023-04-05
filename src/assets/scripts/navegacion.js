function mostrarHistoria() {
  document.getElementById("history").style.display = "block";
  document.getElementById("gastro").style.display = "none";
  document.getElementById("video").style.display = "none";
}

function mostrarGastro() {
  document.getElementById("history").style.display = "none";
  document.getElementById("gastro").style.display = "block";
  document.getElementById("video").style.display = "none";
}

function mostrarVideo() {
  document.getElementById("history").style.display = "none";
  document.getElementById("gastro").style.display = "none";
  document.getElementById("video").style.display = "block";
}

function ocultarTodo() {
  document.getElementById("history").style.display = "none";
  document.getElementById("gastro").style.display = "block";
}
