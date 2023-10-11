const boton = document.getElementById("tienda");
localStorage.setItem("position","dormitorio")








boton.addEventListener('click', function() {
  window.location.href = "./HTML/tienda.html";
});