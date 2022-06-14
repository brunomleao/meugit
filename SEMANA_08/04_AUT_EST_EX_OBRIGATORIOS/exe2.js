function calcular() {
  var num = document.getElementById("num").value;
  var res = document.getElementById("res");
  var lista = num.split("");
  var soma = 0;
  var n = lista.length;
  res.innerHTML = "";
  for (i = 0; i < n; i++) {
    soma += Number(lista[i]);
  }
  res.innerHTML += `A soma dos dígitos será= ${soma}`;
}
