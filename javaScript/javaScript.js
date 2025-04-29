// Obtener los elementos del DOM
const inputpeso = document.getElementById("peso");
const inputaltura = document.getElementById("altura");
const imcElemento = document.getElementById("imc");
const calcularBtn = document.getElementById("calcular");
const resultadoElemento = document.getElementById("resultado"); // importante

// Limitar el campo de peso a 3 dígitos y solo enteros
inputpeso.addEventListener('input', function () {
  inputpeso.value = inputpeso.value.replace(/\D/g, ''); // solo números
  if (inputpeso.value.length > 3) {
    inputpeso.value = inputpeso.value.slice(0, 3);
  }
});

// Validar rango de peso al perder el foco
inputpeso.addEventListener('blur', function () {
  const peso = parseInt(inputpeso.value);
  if (peso > 600 || peso < 40) {
    alert("Por favor coloca un número entre 40 y 600 kg");
    inputpeso.value = "";
  }
});

// Limitar el campo de altura a 3 dígitos y solo enteros
inputaltura.addEventListener('input', function () {
  inputaltura.value = inputaltura.value.replace(/\D/g, ''); // solo números
  if (inputaltura.value.length > 3) {
    inputaltura.value = inputaltura.value.slice(0, 3);
  }
});

// Validar altura al perder el foco
inputaltura.addEventListener('blur', function () {
  const altura = parseInt(inputaltura.value);
  if (altura > 272 || altura < 100) {
    alert("Por favor coloca un número entre 100 y 272 cm");
    inputaltura.value = "";
  }
});

// Función para calcular el IMC
function calcularIMC() {
  const peso = parseFloat(inputpeso.value);
  const altura = parseFloat(inputaltura.value) / 100; // Convertir cm a metros

  if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
    const imc = peso / (altura * altura);
    imcElemento.textContent = `Tu IMC es: ${imc.toFixed(2)}`;
    estado(imc);
  } else {
    imcElemento.textContent = "Por favor, ingresa valores válidos.";
    resultadoElemento.textContent = ""; // Limpiar resultado
  }
}

// Función para mostrar el estado según el IMC
function estado(imc) {
  if (imc < 18.5) {
    resultadoElemento.textContent = "Bajo peso";
  } else if (imc >= 18.5 && imc < 25) {
    resultadoElemento.textContent = "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    resultadoElemento.textContent = "Sobrepeso";
  } else {
    resultadoElemento.textContent = "Obesidad";
  }
}

// Agregar el evento 'click' al botón
calcularBtn.addEventListener("click", calcularIMC);

