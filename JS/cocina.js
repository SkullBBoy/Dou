localStorage.setItem("position","cocina")
const boton = document.getElementById("lastItem2");

window.addEventListener("keydown", (event) => {
  if (event.key == "ArrowRight") {
    window.location.href = "random.html";
  }
  if (event.key == "ArrowLeft") {
    window.location.href = "../index.html"
  }
});







boton.addEventListener('click', function() {
  window.location.href = "tienda.html";
});