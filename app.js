// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let  amigo = "";
let  amigos = [];
let  lista = []
let numeroGenerado= 0;
let amigoSecreto=""


function agregarAmigo() {
    let amigoInterno = document.getElementById('amigo').value;
    console.log(amigoInterno);
    
     if (amigoInterno == "") {
        alert ("Por favor, inserte un nombre.")
    } else {
         amigos.push(amigoInterno);
        document.getElementById('amigo').value= '';
    }
    actualizaAmigos()
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
        numeroGenerado =  Math.floor(Math.random()*amigos.length);
        document.getElementById('resultado').value =amigos[numeroGenerado]
        console.log(amigos[numeroGenerado]);
        console.log(numeroGenerado);
        console.log(document.getElementById('resultado').value)
     }
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""
    const nuevoElemento = document.createElement("li");
     nuevoElemento.textContent = `El amigo secreto sorteado es:  ${document.getElementById('resultado').value}`;
     nuevoElemento.style.color="Green";
     lista.appendChild(nuevoElemento);
  
    }     