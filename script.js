let input = document.getElementById("inputbox");
let add = document.getElementById("add");
let main = document.getElementById("main")
let count = 0 

add.addEventListener("click", () => { // Quando algo clickar, acontecera:
    if(input.value == ''){
        window.alert("Digite algo"); // se n tiver nada, da erro
    } else{
        console.log(input.value);
        count++

        let div = document.createElement("div"); // Cria a div 
        div.classList.add("item" + count)
        div.classList.add("item")
        let inp = document.createTextNode(input.value); // Criar o "nó de texto" a partir do valor do input
        div.appendChild(inp);
        main.appendChild(div); // Adicionar a nova div ao documento
        input.value = ''; // Limpar o valor do input após adicionar
    }
});

main.addEventListener("click", (event) => {
    if(event.target && event.target.classList.contains("item")) {
        main.removeChild(event.target); // Remove o elemento clicado
    }
});

main.addEventListener("contextmenu", (e) => {
    if(e.target && e.target.classList.contains("item")){
        if(e.target.style.textDecoration == 'line-through'){
            e.preventDefault()
            e.target.style.textDecoration = 'none'
            e.target.style.color = ""

        } else{
            e.preventDefault()
            e.target.style.textDecoration = 'line-through'
            e.target.style.color = "red"
    } 
    }
})