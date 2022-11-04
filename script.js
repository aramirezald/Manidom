const h1 = document.querySelector('h1');
const input = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const form = document.querySelector('#form1')
const btn = document.querySelector('#btnCalcular')
const result = document.querySelector('#result')

form.addEventListener('submit', sumarInput)
/* El evento tiene una propiedad "preventDefault" que permite no ejecutar aquello para lo cual está hecho el tipo anterior.
    Es decir, evitar que el botón (que es tomado como submit) recargue la página */
function sumarInput(event){
    console.log({event})
    event.preventDefault()
    const resultS = (parseInt(input.value) + parseInt(input2.value))
    result.innerText = "El resultado de la suma es: " + resultS;
}