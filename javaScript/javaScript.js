// Obtener los elementos del DOM
const inputpeso = document.getElementById("peso");
const inputaltura = document.getElementById("altura");
const imcElemento = document.getElementById("imc");
const calcularBtn = document.getElementById("calcular");
const resultadoElemento = document.getElementById("resultado"); // importante

// Limitar el campo de peso a 2 dígitos y solo enteros
inputpeso.addEventListener('input', function () {
  inputpeso.value = inputpeso.value.replace(/\D/g, ''); // solo números
  if (inputpeso.value.length > 3) {
    inputpeso.value = inputpeso.value.slice(0, 2);
  }
  if(inputpeso.value > 600){
    alert("por favor coloca un numero entre 0 y 600kg")
  } 
});


// Limitar el campo de altura a 3 dígitos y solo enteros
inputaltura.addEventListener('input', function () {
  inputaltura.value = inputaltura.value.replace(/\D/g, ''); // solo números
  if (inputaltura.value.length > 3) {
    inputaltura.value = inputaltura.value.slice(0, 3);
  }
  if(inputaltura.value > 272){
    alert("por favor coloca un numero entre 0 y 272cm")
  } 
})
// Función para calcular el IMC
function calcularIMC() {
  const peso = parseFloat(inputpeso.value);
  const altura = parseFloat(inputaltura.value) / 100; // Convertir cm a metros

  if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
    const imc = peso / (altura * altura);
    imcElemento.textContent = `Tu IMC es: ${imc.toFixed(2)}`;

    estado(imc); // 👈 AQUI la llamada correcta
  } else {
    imcElemento.textContent = "Por favor, ingresa valores válidos.";
    resultadoElemento.textContent = ""; // Limpiar resultado
  }
}

// Función para mostrar el estado según el IMC
function estado(imc) {
  if (imc < 18.5) {
    resultadoElemento.textContent = "Bajo peso";
  } else if (imc >= 18.5 && imc < 25){ resultadoElemento.textContent = "peso normal";
  } else if (imc >= 25 && imc < 30){
    resultadoElemento.textContent = "sobrepeso";
  } else if (imc >= 30){
    resultadoElemento.textContent = "estas gordito vo che"
  }
  
}

// Agregar el evento 'click' al botón
calcularBtn.addEventListener("click", calcularIMC);

