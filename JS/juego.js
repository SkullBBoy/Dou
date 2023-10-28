const botonIniciar = document.getElementById("botonIniciar");
const elementosHoverA = document.querySelectorAll(".hoverA");
const saldoNavbar = document.getElementById("mostrarSaldo");
let audio = document.getElementById('audioElement');
let cuadradoJuego = document.getElementById("objetoClick");
let Saldo =  JSON.parse(localStorage.getItem("Saldo"));
let SaldoMostrar= document.getElementById("lastItem");
let aduioCash= document.getElementById("audioCash");
aduioCash.src = "../Audio/Cash.mp3"; 

if (Saldo !== null) {
} else {
  Saldo=0
  localStorage.setItem("Saldo",Saldo);
}

SaldoMostrar.innerText= `Saldo: $${Saldo}`;

cuadradoJuego.addEventListener('click', function() {
aduioCash.play()
Saldo=Saldo+10
localStorage.setItem("Saldo",Saldo);
SaldoMostrar.innerText= `Saldo: $${Saldo}`;

});

function Juego(){
  let topRandom = Math.floor(Math.random() * (482 - 127 + 1)) + 127;
  let leftRandom = Math.floor(Math.random() * (950 - 265 + 1)) + 265;
  cuadradoJuego.style.opacity = 1;
  cuadradoJuego.style.top = `${topRandom}px`;
  cuadradoJuego.style.left = `${leftRandom}px`;
 
}

function saldoVisible(){

}

botonIniciar.addEventListener('click', () => {
  document.body.style.backgroundImage = `url("../IMG/fondojuego.jpg")`;
  botonIniciar.style.display = "none";
  elementosHoverA.forEach(elemento => {               //
    elemento.addEventListener("mouseenter", () => {   // Cambiar el Hover
      elemento.style.backgroundColor = "black";
      elemento.style.color = "white";
    });

    elemento.addEventListener("mouseleave", () => {
      elemento.style.backgroundColor = "";
      elemento.style.color = "white";
    });
  });                                                // Fin cambiar el hover
  audio.src = "../Audio/Musicajuego.mp3"; 
  audio.play(); 
  audio.addEventListener("ended", function() {
    audio.currentTime = 0; 
    audio.play(); 
  });
  cuadradoJuego.style.display = "block";
  saldoNavbar.style.display="flex";

  setInterval(Juego, 800);




  
});





