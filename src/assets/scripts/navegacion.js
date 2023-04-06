document.getElementById("actionHome").onclick = function () {
  ocultarTodo();
};

document.getElementById("actionHistory").onclick = function () {
  mostrarHistoria();
};

document.getElementById("actionGastro").onclick = function () {
  mostrarGastro();
};

document.getElementById("actionVideo").onclick = function () {
  mostrarVideo();
};

function mostrarHistoria() {
  document.getElementById("history").style.display = "block";
  document.getElementById("gastro").style.display = "none";
  document.getElementById("video").style.display = "none";
  document.getElementById("home").style.display = "none";
}

function mostrarGastro() {
  document.getElementById("history").style.display = "none";
  document.getElementById("gastro").style.display = "block";
  document.getElementById("video").style.display = "none";
  document.getElementById("home").style.display = "none";
}

function mostrarVideo() {
  document.getElementById("history").style.display = "none";
  document.getElementById("gastro").style.display = "none";
  document.getElementById("video").style.display = "block";
  document.getElementById("home").style.display = "none";
}

function ocultarTodo() {
  document.getElementById("history").style.display = "none";
  document.getElementById("gastro").style.display = "none";
  document.getElementById("video").style.display = "none";
  document.getElementById("home").style.display = "block";
}
