let volver = document.getElementById("firstItem");
let volver2= document.getElementById("miditem");
let posicion= localStorage.getItem("position");
let saldox= document.getElementById("saldo");


//al hacer click en producto
let saldoActual = 0;
saldox.innerText = `Saldo: $${saldoActual}`

  
if(posicion=="index"){
    posicion="../index"
}








volver.setAttribute("href", `${posicion}.html `);
volver2.setAttribute('href', `${posicion}.html` );