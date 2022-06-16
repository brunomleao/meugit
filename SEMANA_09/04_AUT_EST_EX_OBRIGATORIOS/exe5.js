function calcular() {
  var limitesup = document.getElementById("num1").value;
  var limiteinf = document.getElementById("num2").value;
  var res = document.getElementById("res");
  res.innerHTML = "";

  var lista = [];
  var listaprimo = [];
  var num;
  var n = Number(limitesup) - Number(limiteinf);

  if (n >= 1) {
    lista.push(limiteinf);
    for (i = 1; i < n; i++) {
      num = Number(limiteinf) + i;
      lista.push(num);
    }
    lista.push(limitesup);
    res.innerHTML += `Intervalo entre ${limiteinf} e ${limitesup} será: [${lista}]`;
  } else if (n == 0) {
    lista.push(limiteinf);
    res.innerHTML += `Intervalo entre ${limiteinf} e ${limitesup} será: [${lista}]`;
  }

  for (i = 0; i < lista.length; i++) {
    var primo = true;
    for (j = 2; j < lista[i]; j++) {
      if (lista[i] % j == 0) {
        primo = false;
      }
    }
    if (primo) {
      listaprimo.push(lista[i]);
    }
  }

  res.innerHTML += `A lista de números primos é: [${listaprimo}]`;
}
