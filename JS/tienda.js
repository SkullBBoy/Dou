let volver = document.getElementById("firstItem");
let posicion = localStorage.getItem("position");
let saldox = document.getElementById("saldoMostrar");
let saldo = localStorage.getItem("Saldo");
let choripan = document.getElementById("choripan");
let milei = document.getElementById("milei");
let caraaleatoria = document.getElementById("caraaleatoria");
let empanada = document.getElementById("empanada");
let goku = document.getElementById("goku");
let fondosAleatorios = document.getElementById("fondosAleatorios");
let compras = localStorage.getItem("Compras");
let audioCash= document.getElementById("audioCash");
let audioFail= document.getElementById("audioFail")
let carrito = [];

audioCash.src = "../Audio/Cash.mp3"; 
audioFail.src="../Audio/fail.mp3";
const comidas = 100;
const items = 150;
const extras = 200;

function alertaSi() {
  swal("Compra", "Hecha con éxito", "success");
  audioCash.play()
}

function alertaNo() {
  swal("Error", "No posee saldo suficiente", "error");
  audioFail.play()
}

if (saldo !== null) {
  saldo = parseFloat(saldo); // Convierte el saldo de cadena a número
} else {
  saldo = 0;
  localStorage.setItem("Saldo", saldo);
}

if (compras !== null) {
  carrito = JSON.parse(compras); // Convierte las compras de cadena a array
} else {
  localStorage.setItem("Compras", JSON.stringify(carrito));
}

saldox.innerText = `Saldo: $${saldo}`;

const precioComida = 100;
const precioItem = 150;
const precioExtra = 200;

if (posicion == "index") {
  posicion = "../index";
}
volver.setAttribute("href", `${posicion}.html`);

function actualizarSaldo() {
  saldox.innerText = `Saldo: $${saldo}`;
  localStorage.setItem("Saldo", saldo);
  
}

choripan.addEventListener('click', function() {
  if ((saldo - comidas < 0) || (carrito.includes("choripan"))) {

    if(saldo - comidas < 0){
      alertaNo();
    }
    if(carrito.includes("choripan")){
      swal("Error", "Ya has adquirido el choripán", "error");
audioFail.play()
    }
    
  } 
  else {
    alertaSi();
    carrito.push("choripan");
    localStorage.setItem("Compras", JSON.stringify(carrito));
    saldo = saldo - comidas;
  }
  actualizarSaldo();
});

empanada.addEventListener('click', function() {
  if ((saldo - comidas < 0) || (carrito.includes("empanada"))) {
    if (saldo - comidas < 0) {
      alertaNo();
    }
    if (carrito.includes("empanada")) {
      swal("Error", "Ya has adquirido la empanada", "error");
audioFail.play()
    }
  } else {
    alertaSi();
    carrito.push("empanada");
    localStorage.setItem("Compras", JSON.stringify(carrito));
    saldo = saldo - comidas;
  }
  actualizarSaldo();
});

milei.addEventListener('click', function() {
  if ((saldo - items < 0) || (carrito.includes("milei"))) {
    if (saldo - items < 0) {
      alertaNo();
    }
    if (carrito.includes("milei")) {
      swal("Error", "Ya has adquirido el item de Milei", "error");
audioFail.play()
    }
  } else {
    alertaSi();
    carrito.push("milei");
    localStorage.setItem("Compras", JSON.stringify(carrito));
    saldo = saldo - items;
  }
  actualizarSaldo();
});

goku.addEventListener('click', function() {
  if ((saldo - items < 0) || (carrito.includes("goku"))) {
    if (saldo - items < 0) {
      alertaNo();
    }
    if (carrito.includes("goku")) {
      swal("Error", "Ya has adquirido el item de Goku", "error");
audioFail.play()
    }
  } else {
    alertaSi();
    carrito.push("goku");
    localStorage.setItem("Compras", JSON.stringify(carrito));
    saldo = saldo - items;
  }
  actualizarSaldo();
});

caraaleatoria.addEventListener('click', function() {
  if ((saldo - extras < 0) || (carrito.includes("caraAleatoria"))) {
    if (saldo - extras < 0) {
      alertaNo();
    }
    if (carrito.includes("caraAleatoria")) {
      swal("Error", "Ya has adquirido la cara aleatoria", "error");
audioFail.play()
    }
  } else {
    alertaSi();
    carrito.push("caraAleatoria");
    localStorage.setItem("Compras", JSON.stringify(carrito));
    saldo = saldo - extras;
  }
  actualizarSaldo();
});

fondosAleatorios.addEventListener('click', function() {
  if ((saldo - extras < 0) || (carrito.includes("fondosAleatorios"))) {
    if (saldo - extras < 0) {
      alertaNo();
    }
    if (carrito.includes("fondosAleatorios")) {
      swal("Error", "Ya has adquirido los fondos aleatorios", "error");
      audioFail.play()
    }
  } else {
    alertaSi();
    carrito.push("fondosAleatorios");
    localStorage.setItem("Compras", JSON.stringify(carrito));
    saldo = saldo - extras;
  }
  actualizarSaldo();
});

