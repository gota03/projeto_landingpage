let soma = document.querySelector("#soma")
let form = document.querySelector("form")
let resultado

// CAMPO DE SOMA COM VALORES DINAMICOS

window.addEventListener("load", ()=>{
    // MATH.FLOOR ARRENDONDA OS VALORES PARA BAIXO
    let num1 = Math.floor(Math.random() * 10) // GERANDO VALORES ALEATORIOS
    console.log(num1)
    let num2 = Math.floor(Math.random() * 10)
    console.log(num2)
    soma.setAttribute("placeholder", `Qual a soma de ${num1} + ${num2}`)
    resultado = num1+num2
})

// VALIDAR O CAMPO DE SOMA

function verificaSoma(){
    if(soma.value == ""){
        soma.style.outline = "none"
    }
    else if(soma.value != resultado){
        soma.style.outline = "2px solid red"
        return false 
    }
    else{
        soma.style.outline = "2px solid green"
        return true
    }
}

soma.addEventListener("keyup", verificaSoma)

form.addEventListener("submit", (event)=>{
    if(verificaSoma()){
        alert("Tudo certo")
        return true
    }
    else{
        alert("B U R R O ! ! !")
        return false
    }
})