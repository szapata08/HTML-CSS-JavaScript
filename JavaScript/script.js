// Capturar los elementos del DOM
const sumButton = document.getElementById('sumButton');
const resButton = document.getElementById('resButton');
const mulButton = document.getElementById('mulButton');
const divButton = document.getElementById('divButton');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultSpan = document.getElementById('result');

//Evento al hacer clic en el boton
sumButton.addEventListener('click', ()=>{
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    //Verificar si los valores ingresados son numeros validos
    if (isNaN(num1) || isNaN(num2)){
        resultSpan.textContent = "Por favor ingrese numeros validos.";
    }else{
        resultSpan.textContent = num1 + num2;
    }
})

//Evento al hacer clic en el boton
resButton.addEventListener('click', ()=>{
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    //Verificar si los valores ingresados son numeros validos
    if (isNaN(num1) || isNaN(num2)){
        resultSpan.textContent = "Por favor ingrese numeros validos.";
    }else{
        resultSpan.textContent = num1 - num2;
    }
})

//Evento al hacer clic en el boton
mulButton.addEventListener('click', ()=>{
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    //Verificar si los valores ingresados son numeros validos
    if (isNaN(num1) || isNaN(num2)){
        resultSpan.textContent = "Por favor ingrese numeros validos.";
    }else{
        resultSpan.textContent = num1 * num2;
    }
})

//Evento al hacer clic en el boton
divButton.addEventListener('click', ()=>{
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    //Verificar si los valores ingresados son numeros validos
    if (isNaN(num1) || isNaN(num2)){
        resultSpan.textContent = "Por favor ingrese numeros validos.";
    }else{
        resultSpan.textContent = num1 / num2;
    }
})