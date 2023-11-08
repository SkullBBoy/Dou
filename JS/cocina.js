localStorage.setItem("position","cocina")
const boton = document.getElementById("lastItem2");
let botonComida= document.getElementById("miditem2")
let boca = document.getElementById("boca")
let audioComer= document.getElementById("audioComer")
audioComer.src="../Audio/Comer.mp3"
let itemComida= document.getElementById("itemComida")
//------------------------------------------------------------------- DOU JS
let Saldo =  JSON.parse(localStorage.getItem("Saldo"));
let Compras = JSON.parse(localStorage.getItem("Compras"));
let Dou = document.getElementById("Dou")
let carrito=[]
let pelo= document.getElementById("pelo")
let pelo2= document.getElementById("pelo2")
/* audioDormir.pause();
audioDormir.currentTime = 0; */ 

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
    window.location.href = "random.html";
  }
  if (event.key == "ArrowLeft") {
    window.location.href = "../index.html"
  }
});

if(Compras.includes("choripan")){
  itemComida.src="../IMG/choripan.png"
  botonComida.addEventListener('click', function() {

    if(Compras.includes("choripan")){
      boca.style.display="flex"
      audioComer.play()
      setTimeout(() => {
        boca.style.display="none"
        itemComida.src="../IMG/vacio.png"
        eliminarItem("choripan");
        const ComprasActualizadas = JSON.stringify(Compras);
        localStorage.setItem("Compras", ComprasActualizadas);
      }, 2000);
    }


  });
}
else if(Compras.includes("empanada")){
  itemComida.src="../IMG/empanada.png"
  botonComida.addEventListener('click', function() {

    if(Compras.includes("empanada")){
      boca.style.display="flex"
      audioComer.play()
      setTimeout(() => {
        boca.style.display="none"
        itemComida.src="../IMG/vacio.png"
        eliminarItem("empanada");
        const ComprasActualizadas = JSON.stringify(Compras);
        localStorage.setItem("Compras", ComprasActualizadas);
      }, 2000);
    }
    


  });
  
}



/* itemComida.src="../IMG/choripan.png"
" */

boton.addEventListener('click', function() {
  window.location.href = "tienda.html";
});

function eliminarItem(elemento) {
  const index = Compras.indexOf(elemento);
  if (index > -1) {
    Compras.splice(index, 1);
  } 
}