localStorage.setItem("position","index")
const boton = document.getElementById("tienda");
const botonArmario = document.getElementById("firstItem2");
const linterna= document.getElementById("miditem2");
const overlay= document.getElementById("overlay")
const linternafoto = document.getElementById("linternafoto")
const prendido = localStorage.getItem("prendido")
let audioDormir=document.getElementById("audioDormir")


//              DOU SKIN ---------------------------------------------------
let Saldo =  JSON.parse(localStorage.getItem("Saldo"));
let Compras = localStorage.getItem("Compras")
let Dou = document.getElementById("Dou")
let carrito=[]
let pelo= document.getElementById("pelo")
let pelo2= document.getElementById("pelo2")


if (Compras !== null) {
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
    Dou.src="./IMG/skins/"+num+".png";
    }
    if (Compras.includes("fondosAleatorios")) {
      let fondo = Math.floor(Math.random() * 16) + 1;
      let rutaFondo = "./IMG/fondos/" + fondo + ".jpg";
      document.body.style.backgroundImage = "url('" + rutaFondo + "')";
    }
    
    
 } else {
  localStorage.setItem("Compras", JSON.stringify(carrito));
}

/* JSON.parse() */



if (Saldo !== null) {
} else {
  Saldo=0
  localStorage.setItem("Saldo",Saldo);
}

// ------------------------------------------------------------------- JS Dou







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
    audioDormir.pause();
    audioDormir.currentTime = 0; 
    if(Compras.includes("caraAleatoria")){
      let num=localStorage.getItem("Skin")
      Dou.src="./IMG/skins/"+num+".png";
      }
      else{
        Dou.src="./IMG/skinbase.png";
      }

  }
  else if(prendido==0){
    overlay.style.background = 'rgba(0, 0, 0, 0.8)';
    linternafoto.src="./IMG/light_off.png"
    linterna.style.zIndex='999'
    localStorage.setItem("prendido","0")
    audioDormir.play()
    Dou.src="./IMG/dormir.png"
  }
}

detectarPrendido()


linterna.addEventListener('click', function() {
  if (overlay.style.background === 'rgba(0, 0, 0, 0.8)') {
    overlay.style.background = 'rgba(0, 0, 0, 0)';
    linternafoto.src="./IMG/light_on.png"
    localStorage.setItem("prendido","1")
    
    audioDormir.pause();
    audioDormir.currentTime = 0; 
    if(Compras.includes("caraAleatoria")){
      let num=localStorage.getItem("Skin")
      Dou.src="./IMG/skins/"+num+".png";
      }
      else{
        Dou.src="./IMG/skinbase.png";
      }
  } else {
    overlay.style.background = 'rgba(0, 0, 0, 0.8)';
    linternafoto.src="./IMG/light_off.png"
    linterna.style.zIndex='999'
    localStorage.setItem("prendido","0")
    audioDormir.play()
    Dou.src="./IMG/dormir.png"
  }



});


boton.addEventListener('click', function() {
  window.location.href = "./HTML/tienda.html";
});

