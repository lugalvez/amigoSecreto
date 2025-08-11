// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let  amigo = "";
let  amigos = [];
let  lista = []
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function agregarAmigo() {
    let amigo = document.getElementById('amigo');
     if (amigoInterno == "") {
        alert ("Por favor, inserte un nombre.")
    } else {
         amigos.push(amigoInterno);
        document.querySelector('amigo').value = '';
    }
    return;
}
function actualizaAmigos() {
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""
    for (let index = 0; index < amigos.length; index++) {
       const nuevoElemento = document.createElement("li");
           nuevoElemento.textContent = amigos[index];
           lista.appendChild(nuevoElemento);
    }
    
    return;
}
function sortearAmigo() {
    if (amigos.length != 0) {
        let numeroGenerado =  Math.floor(Math.random()*amigos.length);
        let elemento = document.getElementById("resultado");
        asignarTextoElemento(elemento, amigos[numeroGenerado])
     }
    }     