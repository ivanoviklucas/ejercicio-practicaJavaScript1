const inputpeso = document.getElementById("peso");
const inputaltura = document.getElementById("altura");
let imc = undefined;

// Aquí obtienes los valores correctamente
let peso = parseFloat(inputpeso.value);
let altura = parseFloat(inputaltura.value);

// Ahora puedes calcular el IMC
imc = peso / (altura * altura);
console.log(imc);
