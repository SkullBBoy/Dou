localStorage.setItem("position","cuartojuegos")
const boton = document.getElementById("lastItem2");
const boton2 = document.getElementById("miditem2")
const boton3 = document.getElementById("firstItem2")
const pelota = document.getElementById("pelota")
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

boton3.addEventListener('click', function() {
  window.location.href = "juego.html";
});

