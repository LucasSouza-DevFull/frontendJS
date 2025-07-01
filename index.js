const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const inputCampo = document.getElementById("input-item");

const botaoAdicionar = document.getElementById("adicionar-item");
let contador = 0;

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    if(inputItem.value ==="") {
        alert("Por favor, insira um item");
        return
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container"); // containerItemDaLista junto ao classlist.add para informar qual div estaria pegando a classe definida no html //
    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    inputCheckBox.addEventListener("click", function(){
        if (inputCheckBox.checked){
            nomeItem.style.textDecoration = "line-through";
        } else{
            nomeItem.style.textDecoration = "none";
        }
    })

    containerItemDaLista.appendChild(inputCheckBox);
    containerItemDaLista.appendChild(nomeItem);
    

    itemDaLista.appendChild(containerItemDaLista);

    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
        weekday: "long",        
    });
    const data = new Date().toLocaleDateString("pt-BR");
    const hora = new Date().toLocaleTimeString("pt-BR", {
        timeStyle: "short",
    });
    const dataFormatada = `${diaDaSemana} (${data}) às ${hora}`;
    const itemData = document.createElement("p");
    itemData.classList.add("texto-data");
    itemData.innerText = dataFormatada;
    itemDaLista.appendChild(itemData);

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