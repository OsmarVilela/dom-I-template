const paragrafo = document.getElementById("paragrafo")
console.log(paragrafo.innerHTML);

const texto = document.getElementById("texto")
console.log(texto.value);

const valores = () => {
    paragrafo.innerHTML = texto.value
    texto.value = ""
}

const imprimir = ()=>{
    console.log(texto.value)
}