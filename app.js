//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
sortearAmigo();

function adicionarAmigo() {
    let nome_amigo = document.getElementById("amigo");
    
    if(nome_amigo.value==""){
        alert("Digite um nome válido");
    }else{
        amigos.push(nome_amigo.value);
        atualizarListaAmigos();
    }
}

function atualizarListaAmigos() {
    console.log("entrou na função");
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(element => {
        lista.innerHTML = lista.innerHTML + `<li>${element}</li>`
    });
    
}

function sortearAmigo() {
    let indice = Math.floor(Math.random()*amigos.length);
    if(amigos[indice]!=null){

        mostrarResultado(amigos[indice]);
    }else{
        console.log("null");
    }
}

function mostrarResultado(param) {
    let resultado=document.getElementById("resultado");
    resultado.innerHTML=`O amigo sorteado foi ${param}`;
}