const boton = document.getElementById("lastItem2");
const boton2= document.getElementById("firstItem2");
let audio = document.getElementById('audioElement');
let ultimoSonidoReproducido = localStorage.getItem('ultimoSonidoReproducido');

//------------------------------------------------------------------- DOU JS
let Saldo =  JSON.parse(localStorage.getItem("Saldo"));
let Compras = localStorage.getItem("Compras")
let Dou = document.getElementById("Dou")
let carrito=[]
let pelo= document.getElementById("pelo")
let pelo2= document.getElementById("pelo2")

  if (Compras != null) {
    if(Compras.includes("milei")){ 
      pelo.style.display="flex"
      pelo2.style.display="none"
    
      }
      else if(Compras.includes("goku")){
        pelo2.style.display="flex"
      pelo.style.display="none"
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
      
   } else {
    localStorage.setItem("Compras", JSON.stringify(carrito));
  }

  /* JSON.parse() */
  
  
  
  if (Saldo != null) {
  } else {
    Saldo=0
    localStorage.setItem("Saldo",Saldo);
  }
  
  // ------------------------------------------------------------------- JS Dou





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





