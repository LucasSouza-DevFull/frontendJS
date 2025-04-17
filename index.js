const inputItem = document.getElementById("input-item")

const botaoAdicionar = document.getElementById("adicionar-item");

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
    

})