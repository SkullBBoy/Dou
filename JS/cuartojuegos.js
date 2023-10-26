localStorage.setItem("position","cuartojuegos")
const boton = document.getElementById("lastItem2");
const boton2 = document.getElementById("miditem2")
const pelota = document.getElementById("pelota")


window.addEventListener("keydown", (event) => {
  if (event.key == "ArrowRight") {
    window.location.href = "../index.html";
  }
  if (event.key == "ArrowLeft") {
    window.location.href = "random.html"
  }
});



boton2.addEventListener('click', function() {
  if (pelota.src.endsWith("vacio.png")) {
    pelota.src = "../IMG/pelota.png";
  } else {
    pelota.src = "../IMG/vacio.png";
  }
});


boton.addEventListener('click', function() {
  window.location.href = "tienda.html";
});


