const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");

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

    containerItemDaLista.appendChild(inputCheckBox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);
    listaDeCompras.appendChild(itemDaLista);
  
    
})