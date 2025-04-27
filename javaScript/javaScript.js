document.addEventListener('DOMContentLoaded', function() {
  const pesoInput = document.getElementById('peso');
  const alturaInput = document.getElementById('altura');
  const calcularBoton = document.getElementById('calcular');

  // Limitar el input de peso a 2 dígitos enteros (sin decimales)
  pesoInput.addEventListener('input', function() {
    let valor = this.value;

    // Eliminar todo lo que no sea un número
    valor = valor.replace(/[^0-9]/g, '');

    // Limitar la parte entera a 2 dígitos
    if (valor.length > 2) {
      valor = valor.slice(0, 2); // Solo permitir hasta 2 dígitos
    }

    this.value = valor; // Asignar el valor modificado al campo de entrada
  });

  // Evitar que el usuario pueda escribir en el input de altura, solo cambiar con las flechas
  alturaInput.addEventListener('keydown', function(e) {
    // Solo permitir teclas de flechas, backspace, enter, etc. pero bloquear otras teclas
    if (![37, 38, 39, 40, 8, 13].includes(e.keyCode)) {
      e.preventDefault(); // Bloquea la escritura manual
    }
  });

  calcularBoton.addEventListener('click', function() {
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (!peso || !altura || altura <= 0 || peso <= 0) {
      alert("Por favor ingresa valores válidos.");
      return;
    }

    const imc = peso / (altura * altura);
    document.getElementById('imc').innerText = `Tu IMC es ${imc.toFixed(2)}`;

    const resultado = document.getElementById('resultado');

    if (imc < 18.5) {
      resultado.innerText = "bajo peso";
    } else if (imc < 25) {
      resultado.innerText = "peso normal";
    } else if (imc < 30) {
      resultado.innerText = "estas en sobrepeso";
    } else {
      resultado.innerText = "estas gordito vo' che";
    }
  });
});
