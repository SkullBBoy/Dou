localStorage.setItem("position","index")
const boton = document.getElementById("tienda");
const botonArmario = document.getElementById("firstItem2");
const linterna= document.getElementById("miditem2");
const overlay= document.getElementById("overlay")
const linternafoto = document.getElementById("linternafoto")
const prendido = localStorage.getItem("prendido")


window.addEventListener("keydown", (event) => {
  if (event.key == "ArrowRight") {
    window.location.href = "./HTML/cocina.html";
  }
  if (event.key == "ArrowLeft") {
    window.location.href = "./HTML/cuartojuegos.html"
  }
});

function detectarPrendido(){
  if(prendido==1){
    overlay.style.background = 'rgba(0, 0, 0, 0)';
    linternafoto.src="./IMG/light_on.png"
    localStorage.setItem("prendido","1")

  }
  else if(prendido==0){
    overlay.style.background = 'rgba(0, 0, 0, 0.8)';
    linternafoto.src="./IMG/light_off.png"
    linterna.style.zIndex='999'
    localStorage.setItem("prendido","0")
  }
}

detectarPrendido()


linterna.addEventListener('click', function() {
  if (overlay.style.background === 'rgba(0, 0, 0, 0.8)') {
    overlay.style.background = 'rgba(0, 0, 0, 0)';
    linternafoto.src="./IMG/light_on.png"
    localStorage.setItem("prendido","1")
  } else {
    overlay.style.background = 'rgba(0, 0, 0, 0.8)';
    linternafoto.src="./IMG/light_off.png"
    linterna.style.zIndex='999'
    localStorage.setItem("prendido","0")
  }
});

botonArmario.addEventListener('click', function() {
  window.location.href = "./HTML/armario.html";
});


boton.addEventListener('click', function() {
  window.location.href = "./HTML/tienda.html";
});

