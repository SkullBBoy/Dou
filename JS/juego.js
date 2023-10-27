const botonIniciar = document.getElementById("botonIniciar");
const elementosHoverA = document.querySelectorAll(".hoverA");
let audio = document.getElementById('audioElement');
let cuadradoJuego = document.getElementById("objetoClick");

botonIniciar.addEventListener('click', () => {
  document.body.style.backgroundImage = `url("../IMG/fondojuego.jpg")`;
  botonIniciar.style.display = "none";
  cuadradoJuego.style.display = "block";
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

  setInterval(Juego, 800);


  
});

function Juego(){
    let topRandom = Math.floor(Math.random() * (482 - 127 + 1)) + 127;
    let leftRandom = Math.floor(Math.random() * (762 - 77 + 1)) + 77;
    cuadradoJuego.style.top = `${topRandom}px`;
    cuadradoJuego.style.left = `${leftRandom}px`;
    console.log(cuadradoJuego.style.top);
  
}