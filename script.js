let input = document.getElementById("inputbox")
let add =document.getElementById("add")
let div = document.createElement("div")

add.addEventListener("click", () =>{
    if(input.value == ''){
        window.alert("digitr algo")
    } else{
        console.log(input.value);
        let inp = document.createTextNode(input)
        div.appendChild(inp)
    }
})