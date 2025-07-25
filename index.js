import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
const listaDeCompras = document.getElementById("lista-de-compras");
const inputCampo = document.getElementById("input-item");

const botaoAdicionar = document.getElementById("adicionar-item");


botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
     verificarListaVazia();

    inputCampo.value = "";
    
})

const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia () {
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if (itensDaLista.length === 0){
        mensagemListaVazia.style.display = "block"
    } else {
        mensagemListaVazia.style.display = "none"
    }
}

verificarListaVazia();