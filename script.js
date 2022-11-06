const h1 = document.querySelector('h1');
const form1 = document.querySelector('#form');
const input1 = document.querySelector('#calcular1');
const input2 = document.querySelector('#calcular2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form1.addEventListener('submit', formulario);
function formulario(event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "The result is " + sumaInputs;
} 