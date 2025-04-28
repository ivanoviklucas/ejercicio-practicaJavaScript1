document.addEventListener('DOMContentLoaded', function() {
  const pesoInput = document.getElementById('peso');
  const alturaInput = document.getElementById('altura');
  const calcularBoton = document.getElementById('calcular');

  pesoInput.addEventListener('input', function() {
    let valor = this.value;
    valor = valor.replace(/[^0-9,.]/g, '');
    valor = valor.replace(',', '.');
    const partes = valor.split('.');
    if (partes.length > 2) {
      valor = partes[0] + '.' + partes[1];
    }
    if (valor.indexOf('.') !== -1) {
      const entero = valor.split('.')[0];
      if (entero.length > 2) {
        valor = entero.slice(0, 2) + '.' + valor.split('.')[1];
      }
    } else {
      if (valor.length > 2) {
        valor = valor.slice(0, 2);
      }
    }
    this.value = valor;
  });

  alturaInput.addEventListener('input', function() {
    let valor = this.value;
    valor = valor.replace(/[^0-9,.]/g, '');
    valor = valor.replace(',', '.');
    const partes = valor.split('.');
    if (partes.length > 2) {
      valor = partes[0] + '.' + partes[1];
    }
    if (valor.length > 4) {
      valor = valor.slice(0, 4);
    }
    this.value = valor;
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
   