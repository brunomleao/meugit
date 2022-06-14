function calcular() {
  var num = document.getElementById("num").value;
  var lista = num.split("");
  var res = document.getElementById("res");
  res.innerHTML = "";

  if (lista.length === 3) {
    if (lista[0] % 2 === 0) {
      res.innerHTML += "O valor da centena é par";
    } else {
      res.innerHTML += "O valor da centena é ímpar";
    }
  } else {
    res.innerHTML += "O valor informado é inválido.";
  }
}
