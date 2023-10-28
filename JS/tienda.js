let volver = document.getElementById("firstItem");
let posicion= localStorage.getItem("position");
let saldox= document.getElementById("saldoMostrar");;
let saldo = localStorage.getItem("Saldo");


const contenedorCosas = document.getElementById("comida-container")
const contenedorInfo= document.getElementById("info")
const fondos = document.getElementById("asa")



if(posicion=="index"){
    posicion="../index"
}
volver.setAttribute("href", `${posicion}.html `);


/* let btnRotar = document.getElementById("btnRotar");
let contenedorTienda = document.getElementById('contenedorTienda');
let contenedorTienda2 = document.getElementById("contenedorTienda2");
let caraGirada = false;

btnRotar.onclick = function() {
  contenedorTienda.classList.toggle('cara-girada');
  contenedorTienda2.classList.toggle('cara');
  caraGirada = !caraGirada;
  
  setTimeout(() => {
    contenedorTienda.style.display = "none";
    contenedorTienda2.style.display = "flex";
  }, 500);
};
 */



