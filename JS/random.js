const boton = document.getElementById("lastItem2");
const boton2= document.getElementById("firstItem2");
let audio = document.getElementById('audioElement');
let ultimoSonidoReproducido = localStorage.getItem('ultimoSonidoReproducido');

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






