function calcular() {
  var n = document.getElementById("n").value;
  var num;
  var res = document.getElementById("res");
  lista = [1, 1];
  res.innerHTML = "";

  if (n > 2) {
    for (i = 1; i < n - 1; i++) {
      num = Number(lista[i - 1]) + Number(lista[i]);
      lista.push(num);
    }
    res.innerHTML = `A sequencia de fibonnaci até o ${n}º termo será igual a ${lista}`;
  }
  if (n == 2) {
    res.innerHTML = `A sequencia de fibonnaci até o ${n}º termo será igual a ${lista}`;
  }
  if (n == 1) {
    res.innerHTML = `A sequencia de fibonnaci até o ${n}º termo será igual a ${lista[0]}`;
  }
}
