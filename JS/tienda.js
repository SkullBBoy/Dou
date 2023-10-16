let volver = document.getElementById("firstItem");
let volver2= document.getElementById("miditem");
let posicion= localStorage.getItem("position")
/* let saldox= localStorage.getItem("saldo")

function mostrarSaldo() {
    const contadorArticulos = document.getElementById('saldo');
    contadorArticulos.textContent = saldox;
  }
  mostrarSaldo() */

  
if(posicion=="index"){
    posicion="../index"
}








volver.setAttribute("href", `${posicion}.html `);
volver2.setAttribute('href', `${posicion}.html` );