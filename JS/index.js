localStorage.setItem("position","index")
const boton = document.getElementById("tienda");
const botonArmario = document.getElementById("firstItem2");
const linterna= document.getElementById("miditem2");
const overlay= document.getElementById("overlay")
const linternafoto = document.getElementById("linternafoto")
const prendido = localStorage.getItem("prendido")
let Saldo =  JSON.parse(localStorage.getItem("Saldo"));
let Compras = localStorage.getItem("Compras")
let Dou = document.getElementById("Dou")
let carrito=[]
let pelo= document.getElementById("pelo")

if (Compras !== null) {
 } else {
  localStorage.setItem("Compras", JSON.stringify(carrito));
}

/* JSON.parse() */

if(Compras.includes("milei")){ //              DOU SKIN ----------------------------------
pelo.src="./IMG/peluca.png"
pelo.style.position="absolute"
pelo.style.width="180px"
pelo.style.top="174px"
pelo.style.left="545px"
pelo.style.zIndex="2"
}
else if(Compras.includes("goku")){
  pelo.src="./IMG/goku.png"
  pelo.style.position="absolute"
  pelo.style.width="267px"
  pelo.style.top="111px"
  pelo.style.left="495px"
  pelo.style.zIndex="2"
 
}
if(Compras.includes("caraAleatoria")){
let num=localStorage.getItem("Skin")
Dou.src="./IMG/skins/"+num+".png";
}
if (Compras.includes("fondosAleatorios")) {
  let fondo = Math.floor(Math.random() * 16) + 1;
  let rutaFondo = "./IMG/fondos/" + fondo + ".jpg";
  document.body.style.backgroundImage = "url('" + rutaFondo + "')";
}
else{
  document.body.style.backgroundImage = "url('../IMG/fondoazul.jpg')";
  
} 
if(Dou.src==""){
  Dou.src="./IMG/skinbase.png"
}


// ------------------------------------------------------------------- JS Dou






if (Saldo !== null) {
} else {
  Saldo=0
  localStorage.setItem("Saldo",Saldo);
}

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

