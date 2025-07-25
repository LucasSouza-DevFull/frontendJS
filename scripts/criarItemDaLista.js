const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemDaLista(){

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

    return itemDaLista;
}