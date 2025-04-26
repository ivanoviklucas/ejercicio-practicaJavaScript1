
document.getElementById("calcular").addEventListener("click", function() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  if (!peso || !altura) {
    alert("Por favor ingresa valores válidos.");
    return;
  }


  const imc = peso / (altura ** 2);
  console.log("IMC:", imc);

  if (imc < 18.5) {
    document.getElementById("resultado").innerText ="bajo peso"
  } else if (imc >= 18.5 && imc < 25) {
    document.getElementById("resultado").innerText ="peso normal"
  } else if (imc >= 25 && imc < 30) {
    document.getElementById("resultado").innerText ="estas en sobre peso"
  } else {
    document.getElementById("resultado").innerText ="estas gordito vo che"
  }
});
