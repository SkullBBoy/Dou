const boton = document.getElementById("lastItem2");
const boton2= document.getElementById("firstItem2");
let audio = document.getElementById('audioElement');
let ultimoSonidoReproducido = localStorage.getItem('ultimoSonidoReproducido');

let Compras = localStorage.getItem("Compras")
let Dou = document.getElementById("Dou")
let carrito=[]
let pelo= document.getElementById("pelo")

if(Compras.includes("milei")){ //              DOU SKIN ----------------------------------
  pelo.src="../IMG/peluca.png"
  pelo.style.position="absolute"
  pelo.style.width="180px"
  pelo.style.top="174px"
  pelo.style.left="557px"
  pelo.style.zIndex="2"
  }
  else if(Compras.includes("goku")){
    pelo.src="../IMG/goku.png"
    pelo.style.position="absolute"
    pelo.style.width="267px"
    pelo.style.top="111px"
    pelo.style.left="507px"
    pelo.style.zIndex="2"
   
  }
  if(Compras.includes("caraAleatoria")){
  let num=localStorage.getItem("Skin")
  Dou.src="../IMG/skins/"+num+".png";
  }
  if (Compras.includes("fondosAleatorios")) {
    let fondo = Math.floor(Math.random() * 16) + 1;
    let rutaFondo = "../IMG/fondos/" + fondo + ".jpg";
    document.body.style.backgroundImage = "url('" + rutaFondo + "')";
  }
  else{
    document.body.style.backgroundImage = "url('../IMG/fondoazul.jpg')";
    
  } 
  if(Dou.src==""){
    Dou.src="./IMG/skinbase.png"
  }// ------------------------------------------------------------------- JS Dou





window.addEventListener("keydown", (event) => {
  if (event.key == "ArrowRight") {
    window.location.href = "cuartojuegos.html";
  }
  if (event.key == "ArrowLeft") {
    window.location.href = "cocina.html"
  }
});


boton.addEventListener('click', function() {
  let numeroAleatorio = Math.floor(Math.random() * 35) + 1; 
  let nombreSonido = "../Audio/" + numeroAleatorio + '.mp3';
  
  audio.src = nombreSonido; 
  audio.play(); 
  
  ultimoSonidoReproducido = nombreSonido;
  localStorage.setItem('ultimoSonidoReproducido', ultimoSonidoReproducido);
});


boton2.addEventListener('click', function() {
  audio.src = ultimoSonidoReproducido; 
  audio.play(); 
});





