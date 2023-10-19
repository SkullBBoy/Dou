localStorage.setItem("position","index")
const boton = document.getElementById("tienda");
const linterna= document.getElementById("miditem2");
const overlay= document.getElementById("overlay")
const linternafoto = document.getElementById("linternafoto")





linterna.addEventListener('click', function() {
  if (overlay.style.background === 'rgba(0, 0, 0, 0.8)') {
    overlay.style.background = 'rgba(0, 0, 0, 0)';
    linternafoto.src="./IMG/light_on.png"

  } else {
    overlay.style.background = 'rgba(0, 0, 0, 0.8)';
    linternafoto.src="./IMG/light_off.png"
    linterna.style.zIndex='999'
  }
});


boton.addEventListener('click', function() {
  window.location.href = "./HTML/tienda.html";
});