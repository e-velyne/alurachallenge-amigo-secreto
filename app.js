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
        nome_amigo.value="";
    }
}

function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(element => {
        lista.innerHTML = lista.innerHTML + `<li>${element}</li>`
    });
    
}

function sorteioHabilitado(){  
    let botaoSortear = document.getElementById("botaoSortear");
    botaoSortear.removeAttribute("disabled");
}

function iniciarSorteio() {
    if(amigos.length>1){ //só deixa começar o sorteio quando há mais de dois amigos na lista 
        let botaoIniciar = document.getElementById("botaoIniciarSorteio");
        let botaoAdicionar = document.getElementById("botaoAdicionar");

        botaoAdicionar.setAttribute("disabled","true"); //não permite adicionar novos sorteios 
                                                        //após ter iniciado o sorteio
        botaoIniciar.setAttribute("disabled","true");
        sorteioHabilitado();
    }else{
        alert("O sorteio só pode ser iniciado com dois ou mais amigos");
    }
}

function sortearAmigo() {
    let indice = Math.floor(Math.random()*amigos.length);
    if(amigos[indice]!=null){
        mostrarResultado(amigos[indice]);
        amigos.splice(indice,1); //só permite que cada amigo seja sorteado uma vez
        
        if(amigos.length==0){
            let botaoSortear = document.getElementById("botaoSortear");
            botaoSortear.setAttribute("disabled","true");
                            //encerra a possibilidade de fazer um novo sorteio quando
                            //elementos no array chega a zero
            let resultado=document.getElementById("resultado");
            resultado.innerHTML=resultado.innerHTML+"<br>Todos os amigos já foram sorteados.<br>Sorteio encerrado."
            //avisa quando o sorteio terminou
        }
        
    }else{
        console.log("null");
    }
}

function mostrarResultado(param) {
    let resultado=document.getElementById("resultado");
    resultado.innerHTML=`O amigo sorteado foi ${param}`;
}